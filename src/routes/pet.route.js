const router = require("express").Router();
const controllerPets = require("../controllers/pet.controller");
const { validId, validObjectBody } = require("../middlewares/pet.middleware");

router.get("/all-pets", controllerPets.findAllPetsController);
router.get("/one-pet/:id", validId, controllerPets.findByIdPetController);
router.post("/create-pet", controllerPets.createPetController);
router.put("/update-pet/:id", validId, controllerPets.updatePetController);
router.delete("/delete-pet/:id", validId, controllerPets.deletePetController);

module.exports = router;
