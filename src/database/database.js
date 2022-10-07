const mongoose = require("mongoose");

const connectToDatabase = () => {
  console.log("Conectando com o banco de dados, aguarde...");
  mongoose
    .connect(
      String(
        "mongodb+srv://root:admin@cluster0.bikamqu.mongodb.net/?retryWrites=true&w=majority"
      ),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("MongoDB conectado ;)"))
    .catch((error) => {
      console.log(`Erro ao conectar com o MongoDB: ${error}`);
    });
};

module.exports = connectToDatabase;
