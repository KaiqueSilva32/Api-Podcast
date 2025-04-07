import mongoose from "mongoose";

// Documento aninhado
const episodiosSchema = new mongoose.Schema({
  convidado: String,
  numeroEp: String,
  sobreConvidado: String,
});

const podcastSchema = new mongoose.Schema({
  nome: String,
  sobre: String,
  episodios: [episodiosSchema], // Array de objetos
});

// Aqui está sendo criado a coleção games no banco de dados
const Podcast = mongoose.model("Podcast", podcastSchema);

export default Podcast;
