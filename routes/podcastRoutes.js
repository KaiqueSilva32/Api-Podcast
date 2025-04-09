import express from "express";
const podcastRoutes = express.Router();
import podcastController from "../controllers/podcastController.js";
// Importando o middleware de autenticação
// import Auth from '../middleware/Auth.js'


podcastRoutes.get("/podcasts", podcastController.getAllPodcast);


podcastRoutes.post("/podcasts", podcastController.createPodcast);


podcastRoutes.delete("/podcasts/:id", podcastController.deletePodcast);


podcastRoutes.put("/podcasts/:id",  podcastController.updatePodcast)


podcastRoutes.get("/podcasts/:id", podcastController.getOnePodcast)

export default podcastRoutes;
