import podcastService from "../services/podcastService.js";
import { ObjectId } from "mongodb";

// Função para listar os podcasts
const getAllPodcast = async (req, res) => {
  try {
    const podcasts = await podcastService.getAll();
    // Requisição feita com sucesso - Cod. 200 (OK)
    res.status(200).json({ podcast:podcasts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// Função para cadastrar um podcast
const createPodcast = async (req, res) => {
  try {
    const { nome, sobre, episodios } = req.body;
    // Cadastrando no banco
    await podcastService.create(nome, sobre, episodios);
    res.sendStatus(201); // Código 201 (CREATED)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// Função para deletar um podcast
const deletePodcast = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      await podcastService.delete(id); // Garantir que a deletação seja aguardada
      res.sendStatus(204); // Código 204 (NO CONTENT)
    } else {
      res.sendStatus(400); // Código 400 (BAD REQUEST)
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// Função para atualizar um podcast
const updatePodcast = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const { nome, sobre, episodios } = req.body;
      await podcastService.update(id, nome, sobre, episodios); // Atualizando o podcast
      res.sendStatus(200); // Código 200 (OK): Requisição bem sucedida
    } else {
      res.sendStatus(400); // Código 400 (Bad Request)
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// Função para buscar um único podcast
const getOnePodcast = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const podcast = await podcastService.getOne(id);
      if (!podcast) {
        res.sendStatus(404); // Código 404: NOT FOUND
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
