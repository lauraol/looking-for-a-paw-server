const mongoose = require("mongoose");

function connectToDatabase() {
  mongoose
    .connect("mongodb://localhost:27017/pets-db", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB conectado com sucesso! :)"))
    .catch((error) => {
      console.log(`Erro ao conectar com o MongoDB, veja: ${error}`);
    });
}

module.exports = connectToDatabase;
