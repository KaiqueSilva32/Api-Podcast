import Podcast from "../models/Podcast.js";

class podcastService {

  // async / await
  // Função para listar os podcasts
  async getAll() {
    try {
      const podcasts = await Podcast.find();
      return podcasts;
    } catch (error) {
      console.log(error);
    }
  }

  // Função para cadastrar jogos
  async Create(nome, sobre, episodios) {
    try {
      const newPodcast = new Podcast({
        // title : title
        nome,
        sobre,
        episodios
      });
      // Método do mongoose para cadastrar .save()
      await newPodcast.save();
    } catch (error) {
      console.log(error);
    }
  }

  // Função para deletar jogos
  async Delete(id) {
    try {
      await Podcast.findByIdAndDelete(id);
      console.log(`Podcast com a id: ${id} foi deletado.`);
    } catch (error) {
      console.log(error);
    }
  }

  // Função para alterar jogos
  async Update(id, nome, sobre, episodios) {
    try {
      await Podcast.findByIdAndUpdate(id, {
        // title : title
        nome,
        sobre,
        episodios,
      });
      console.log(`Dados do podcast com a id: ${id} alterados com sucesso.`);
    } catch (error) {
      console.log(error);
    }
  }

  // Função para listar um único jogo
  async getOne(id) {
    try {
      const podcast = await Podcast.findOne({ _id: id });
      return podcast;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new podcastService();
