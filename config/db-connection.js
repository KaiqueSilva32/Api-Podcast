import mongoose from "mongoose";

const dbUser = "silvakaique7934";

const dbPassword = "1okR54GvvKQdGl1V";

const connect = () => {
  mongoose.connect(
    `mongodb+srv://kaki:<db_password>@kaiquesilva.aauiy.mongodb.net/?retryWrites=true&w=majority&appName=KaiqueSilva`
  );
  const connection = mongoose.connection;
  connection.on("error", () => {
    console.log("Erro ao conectar com o mongoDB");
  });
  connection.on("open", () => {
    console.log("Conectado ao mongoDB com sucesso");
  });
};
connect();
export default mongoose;
