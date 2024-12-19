import { Anime } from "../models/anime.model.js";

export const createNewAnime = async (req, res) =>{
    try {
        const data = req.body;

        const anime = await Anime.create(data);
        
        res.status(201).json({
            message:'Anime created successfully',
            status:201,
            data:anime
        })
    } catch (error) {
        res.status(501).json({
            message:'Failed to created new Anime in Controller',
            status:501,
            error
        })
    }
}

export const getAllAnime = async (req, res) => {
    try {
        const data = await Anime.getAll();

        res.status(201).json({
            message:"Animes found successfully",
            status:201,
            data
        })

    } catch (error) {
        res.status(501).json({
            message:"Animes not found",
            status:501,
            error
        })
    }
}

export const getAnimeByIdOrNane = async (req, res) => {
    try {
        const {value} = req.params;
        const data = await Anime.getByIdOrName(value);
        res.status(201).json({
            message:"Id or Name of Anime found successfully",
            status:201,
            data
        })
    } catch (error) {
        res.status(501).json({
            message:'Id or Name of Anime not found in file',
            status:501,
            error
        })
    }
}

export const updateAnime = async (req, res) => {
    try {
        const {id} = req.params;

        const dataAnime = req.body;

        const oldAnime = await Anime.update(id, dataAnime);
        
        res.status(201).json({
            message:'Updated Anime SuccessFully',
            status:201,
            OldData:oldAnime,
            data: dataAnime
        })
    } catch (error) {
        res.status(500).json({
            message:'Failed to updated Anime',
            status:501,
            error
        })
    }
}

export const deleteAnime = async (req, res) =>{
    try {
        const {id} = req.params;
        const deleteData = await Anime.delete(id);
    
        res.status(201).json({
            message:'Anime deleted successfully',
            status:201,
            AnimeDeleted:deleteData
        })
    } catch (error) {
        res.status(500).json({
            message:'Failed to delete Anime',
            status:500,
            error
        })
    }
}