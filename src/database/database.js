const mongoose = require("mongoose");

function connectToDatabase() {
  console.log("Conectando ao banco de dados, aguarde...");
  mongoose
    .connect(String(process.env.URI_DATABASE), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB conectado com sucesso! :)"))
    .catch((error) => {
      console.log(`Erro ao conectar com o MongoDB, veja: ${error}`);
    });
}

module.exports = connectToDatabase;
