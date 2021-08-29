const User = require("../models/User");

module.exports = {
  async register(req, res) {
    const {
      name,
      jobTitle,
      birthDate,
      maritalStatus,
      gender,
      address,
      district,
      city,
      cep,
      telephone,
      telephone2,
      celphone,
      contact,
      email,
      rg,
      cpf,
      hasCar,
      driversLicence,
    } = req.body;

    const newUser = new User();

    newUser.name = name;
    newUser.jobTitle = jobTitle;
    newUser.birthDate = birthDate;
    newUser.maritalStatus = maritalStatus;
    newUser.gender = gender;
    newUser.address = address;
    newUser.district = district;
    newUser.city = city;
    newUser.cep = cep;
    newUser.telephone = telephone;
    newUser.telephone2 = telephone2;
    newUser.celphone = celphone;
    newUser.contact = contact;
    newUser.email = email;
    newUser.rg = rg;
    newUser.cpf = cpf;
    newUser.hasCar = hasCar;
    newUser.driversLicence = driversLicence;

    newUser.save((err, saveUser) => {
      if (err) {
        console.log(err);
        return res
          .status(500)
          .send("Houve um erro ao salvar o usuário. Tente novamente");
      }

      return res.status(200).send(saveUser);
    });
  },
};
