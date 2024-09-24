const mongoose = require("mongoose");
const { Schema } = mongoose;

const validationPatterns = {
  username: /^[a-zA-Z0-9]+$/, // Alphanumeric only
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Basic email format
  strongPassword:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, // Strong password pattern
};

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    minlength: [3, "Username must be at least 3 characters long"],
    maxlength: [30, "Username must be less than 30 characters long"],
    unique: true,
    validate: {
      validator: function (inputedUsername) {
        return validationPatterns.username.test(inputedUsername);
      },
      message: "Username must be alphanumeric.",
    },
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    validate: {
      validator: function (value) {
        return validationPatterns.email.test(value);
      },
      message: "Invalid email address.",
    },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    validate: {
      validator: function (value) {
        return validationPatterns.strongPassword.test(value);
      },
      message:
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character (@$!%*?&).",
    },
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;