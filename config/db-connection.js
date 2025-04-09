import mongoose from "mongoose";

const dbUser = "kaique_silva";
const pass = "1vWfOIiVX72mbgV3";

const connect = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${dbUser}:${encodeURIComponent(pass)}@cluster-podcast.gukzrqf.mongodb.net/api-podcast?retryWrites=true&w=majority&appName=Cluster-Podcast`
    );
    console.log("Conectado ao mongoDB com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar com o mongoDB:", error);
  }
};

connect();

export default mongoose;
