const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, unique: false, required: true },
    jobTitle: { type: String, unique: false, required: false },
    birthDate: { type: String, unique: false, required: true },
    maritalStatus: { type: String, unique: false, required: false },
    gender: { type: String, unique: false, required: false },
    address: { type: String, unique: false, required: true },
    district: { type: String, unique: false, required: true },
    city: { type: String, unique: false, required: true },
    cep: { type: Number, unique: true, required: true },
    telephone: { type: Number, unique: false, required: false },
    telephone2: { type: Number, unique: false, required: false },
    celphone: { type: Number, unique: false, required: false },
    contact: { type: String, unique: false, required: false },
    email: { type: String, unique: true, required: false },
    rg: { type: Number, unique: true, required: true },
    cpf: { type: Number, unique: true, required: true },
    hasCar: { type: String, unique: false, required: false },
    driversLicence: { type: String, unique: false, required: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
