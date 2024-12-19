import { Router } from "express";
import { createNewAnime, deleteAnime, getAllAnime, getAnimeByIdOrNane, updateAnime } from "../controllers/anime.controller.js";

const router = Router();

router.post('/anime', createNewAnime);
router.get('/anime', getAllAnime);
router.get('/anime/:value',getAnimeByIdOrNane);
router.put('/anime/:id',updateAnime);
router.delete('/anime/:id',deleteAnime);

export default router;