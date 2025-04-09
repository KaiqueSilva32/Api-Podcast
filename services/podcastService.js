import Podcast from "../models/Podcast.js";

class PodcastService {

  // Função para listar todos os podcasts
  async getAll() {
    try {
      const podcasts = await Podcast.find();
      return podcasts;
    } catch (error) {
      console.error("Erro ao listar podcasts:", error);
    }
  }

  // Função para cadastrar um novo podcast
  async create(nome, sobre, episodios) {
    try {
      const newPodcast = new Podcast({
        nome,
        sobre,
        episodios
      });
      // Método do mongoose para cadastrar .save()
      await newPodcast.save();
    } catch (error) {
      console.error("Erro ao criar podcast:", error);
    }
  }

  // Função para deletar um podcast
  async delete(id) {
    try {
      await Podcast.findByIdAndDelete(id);
      console.log(`Podcast com a id: ${id} foi deletado.`);
    } catch (error) {
      console.error("Erro ao deletar podcast:", error);
    }
  }

  // Função para atualizar os dados de um podcast
  async update(id, nome, sobre, episodios) {
    try {
      await Podcast.findByIdAndUpdate(id, {
        nome,
        sobre,
        episodios,
      });
      console.log(`Dados do podcast com a id: ${id} alterados com sucesso.`);
    } catch (error) {
      console.error("Erro ao atualizar podcast:", error);
    }
  }

  // Função para listar um único podcast
  async getOne(id) {
    try {
      const podcast = await Podcast.findOne({ _id: id });
      return podcast;
    } catch (error) {
      console.error("Erro ao buscar podcast:", error);
    }
  }
}

export default new PodcastService();
