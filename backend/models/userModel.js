import mongoose from "mongoose";

// password lai encript garna ko la ho
import bcrypt from "bcryptjs"

// backend ko lagi filed banako yesma

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timeStamps: true,
  }
);

userSchema.methods.matchPassword = async function(enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password)
}

// password lai entript garne (database ma save hunu vanda aagadi password lai encript gareko yesma)
userSchema.pre('save', async function(next){

  if(!this.isModified('password')){
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model("User", userSchema);

export default User;
