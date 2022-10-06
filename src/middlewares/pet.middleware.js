const mongoose = require("mongoose");

const validId = (req, res, next) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: "Id inválido!" });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const pet = req.body;

  if (
    !pet ||
    !pet.foto ||
    !pet.nome ||
    !pet.raca ||
    !pet.idade ||
    !pet.sexo ||
    !pet.peso ||
    !pet.porte ||
    !pet.vacinado ||
    !pet.castrado ||
    !pet.historico ||
    !pet.adotado
  ) {
    return res
      .status(400)
      .send({ message: "Envie todos os campos do pet, por favor! >:(" });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
};
