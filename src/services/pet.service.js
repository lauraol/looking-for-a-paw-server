const Pets = require("../models/Pet");

const findAllPetsService = async () => {
  const allPets = await Pets.find();
  return allPets;
};

const findByIdPetService = async (idParam) => {
  const onePet = await Pets.findById(idParam);
  return onePet;
};

const createPetService = async (newPet) => {
  const createdPet = await Pets.create(newPet);
  return createdPet;
};

const updatePetService = async (idParam, editPet) => {
  const updatePet = await Pets.findByIdAndUpdate(idParam, editPet);
  return updatePet;
};

const deletePetService = async (idParam) => {
  return await Pets.findByIdAndDelete;
};

module.exports = {
  findAllPetsService,
  findByIdPetService,
  createPetService,
  updatePetService,
  deletePetService,
};
