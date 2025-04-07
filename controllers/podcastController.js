import podcastService from "../services/podcastService.js";
import { ObjectId } from "mongodb";

// Função para listar os jogos
const getAllPodcast = async (req, res) => {
  try {
    const podcast = await podcastService.getAll();
    // Requisição feita com sucesso - Cod. 200 (OK)
    res.status(200).json({ podcast: podcast });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// Função para cadastrar jogos
const createPodcast = async (req, res) => {
  try {
    // const title = req.body.title
    // const platform = req.body.platform

    // Desestruturação
    // Capturando valores
    const { nome, sobre, episodios } = req.body;
    // Cadastrando no banco
    await podcastService.Create(nome, sobre, episodios);
    res.sendStatus(201); // Código 201 (CREATED)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// Função para deletar jogos
const deletePodcast = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      podcastService.Delete(id);
      res.sendStatus(204); // Código 204 (NO CONTENT)
    } else {
      res.sendStatus(400); // Código 400 (BAD REQUEST)
      // Requisição mal formada
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// Função para alterar um jogo
const updatePodcast = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      // Desestruturação
      //const title = req.body.title
      const { nome, sobre, episodios } = req.body;
      gameService.Update(id, nome, sobre, episodios);
      res.sendStatus(200); // Código 200 (OK): Requisição bem sucedida
    } else {
      res.sendStatus(400); // Código 400 (Bad Request): Requisição mal formada
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// Função para buscar um único jogo
const getOnePodcast = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const podcast = await podcastService.getOne(id);
      if (!podcast) {
        res.sendStatus(404); // Código 404: NOT FOUND - Não encontrado
      } else {
        res.status(200).json({ podcast });
      }
    } else {
      res.sendStatus(400); // Código 400: Bad Request
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500); // Erro interno do servidor
  }
};

export default { getAllPodcast, createPodcast, deletePodcast, updatePodcast, getOnePodcast };
