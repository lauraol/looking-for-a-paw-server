const petsService = require("../services/pet.service");

const findAllPetsController = async (req, res) => {
  const allpets = await petsService.findAllPetsService();

  if (allpets.length == 0) {
    return res
      .status(404)
      .send({ message: "Não existe nenhum pet cadastrado no banco de dados!" });
  }
  res.send(allpets);
};

const findByIdPetController = async (req, res) => {
  const idParam = req.params.id;
  const chosenPet = await petsService.findByIdPetService(idParam);

  if (!chosenPet) {
    return res.status(404).send({ message: "Pet não encontrado!" });
  }
  res.send(chosenPet);
};

const createPetController = async (req, res) => {
  const pet = req.body;

  if (
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
    return res.status(400).send({
      message: "Envie todos os campos de informação relacionados ao pet.",
    });
  }

  const newPet = await petsService.createPetService(pet);
  res.status(201).send(newPet);
};

const updatePetController = async (req, res) => {
  const idParam = req.params.id;
  const editPet = req.body;

  if (
    !editPet.foto ||
    !editPet.nome ||
    !editPet.raca ||
    !editPet.idade ||
    !editPet.sexo ||
    !editPet.peso ||
    !editPet.porte ||
    !editPet.vacinado ||
    !editPet.castrado ||
    !editPet.historico ||
    !editPet.adotado
  ) {
    return res.status(404).send({
      message:
        "Envie todos os campos de informação relacionadas ao pet que será editado!",
    });
  }

  const updatedPet = await petsService.updatePetService(idParam, editPet);
  res.send(updatedPet);
};

const deletePetController = async (req, res) => {
  const idParam = req.params.id;
  await petsService.deletePetService(idParam);
  res.send({ message: "Pet deletado com sucesso da base de dados!" });
};

module.exports = {
  findAllPetsController,
  findByIdPetController,
  createPetController,
  updatePetController,
  deletePetController,
};
