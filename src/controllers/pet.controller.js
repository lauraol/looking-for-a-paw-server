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
  const newPet = await petsService.createPetService(pet);
  res.status(201).send(newPet);
  console.log(newPet);
};

const updatePetController = async (req, res) => {
  const idParam = req.params.id;
  const editPet = req.body;
  const updatedPet = await petsService.updatePetService(idParam, editPet);
  res.send(updatedPet);
  console.log("updatedPet:", updatedPet);
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
