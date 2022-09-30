const router = require("express").Router();
const controllerPets = require("../controllers/pet.controller");

router.get("/all-pets", controllerPets.findAllPetsController);
router.get("/one-pet/:id", controllerPets.findByIdPetController);
router.post("/create-pet", controllerPets.createPetController);
router.put("/update-pet/:id", controllerPets.updatePetController);
router.delete("/delete-pet/:id", controllerPets.deletePetController);

module.exports = router;
