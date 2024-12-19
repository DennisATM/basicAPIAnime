import {v4 as uuidv4} from 'uuid';
import { createDataFile, deleteData, getAllData, getDataByIdOrName, updateData } from '../utils/anime.util.js';

export class Anime{
    #id;
    #nombre;
    #genero;
    #anio;
    #autor;

    constructor(nombre, genero, anio, autor){
        this.#id = uuidv4();
        this.#nombre = nombre;
        this.#genero = genero;
        this.#anio = anio;
        this.#autor = autor;
    }

    get id(){
        return this.#id;
    }
    get nombre(){
        return this.#nombre;
    }
    get genero(){
        return this.#genero;
    }
    get anio(){
        return this.#anio;
    }
    get autor(){
        return this.#autor;
    }
    getAllProperties(){
        return {
            id: this.#id,
            nombre : this.#nombre,
            genero : this.#genero,
            anio : this.#anio,
            autor : this.#autor
        }
    }
    
    setNombre(newNombre){
        this.#nombre = newNombre;
    }
    setGenero(newGenero){
        this.#genero = newGenero;
    }
    setAnio(newAnio){
        this.#anio = newAnio;
    }
    setAutor(newAutor){
        this.#autor = newAutor;
    }

    static async create(data){
        try {
            
            const {nombre, genero, anio, autor} = data;
            
            const anime = new Anime(nombre, genero, anio, autor);
            
            const animeObject = anime.getAllProperties();

            await createDataFile(animeObject, 'anime.json');

            return animeObject;
        } catch (error) {
            throw new Error(`Failed to create new Object Anime, error: ${error}`);
        }
    }

    static async getAll(){
        try {
            const animes = await getAllData('anime.json');
            return animes;
        } catch (error) {
            throw new Error(`Failed get all data, Error:${error}`);
        }
    }

    static async getByIdOrName(value){
        try {
            const anime = await getDataByIdOrName(value,'anime.json');
            return anime;
        } catch (error) {
            throw new Error(`Failed to get Data by Id, Error:${error}`);
        }
    }

    static async update(id, data){
        try {
            console.log(id,"-",data);
            const updateAnime = await updateData(id, data, 'anime.json');
            return updateAnime;
        } catch (error) {
            throw new Error(`Failed to updated object Anime, Error:${error}`);
        }
    }

    static async delete(id){
        try {
            const animeToDelete  = await deleteData(id, 'anime.json');
            return animeToDelete;
        } catch (error) {
            throw new Error(`Failed to delete anime object, Error:${error}`);
        }
    }
}
