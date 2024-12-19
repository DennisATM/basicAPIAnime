import { createFile, readFile } from "../services/anime.service.js"


export const createDataFile = async (data, dataPath) => {
    try {
        const datafile = await readFile(dataPath);
        let dataJson = null
    
        !datafile || datafile.length === 0 ? (dataJson = [data]) : dataJson = [ ...datafile, data ]
    
        await createFile(dataJson, dataPath)
        
    } catch (error) {
        throw new Error(`Failed to create data in Utils, Error: ${error}`)
    }
}

export const getAllData = async(dataPath) =>{
    try {
        const data = await readFile(dataPath);

        return data;

    } catch (error) {
        throw new Error(`Failed to reading all data in Utils. Error:${error}`);
    }
}

export const getDataByIdOrName = async (value, dataPath) =>{
    try {
        const data = await readFile(dataPath);
    
        const valueNormalized = value.toLocaleLowerCase().replace(/\s+/g, '');

        let dataFounded = data.find(dataFounded => dataFounded.id === value);
    
        if(dataFounded === undefined ){
             dataFounded = data.filter(dataFounded =>dataFounded.nombre.toLocaleLowerCase().replace(/\s+/g, '') === valueNormalized);
        }
    
        return dataFounded;

    } catch (error) {
        
        throw new Error(`Failed to reading data by Id or name in Utils, Error:${error}`);
    }
}

export const updateData = async (id, newData, pathData)=>{
    try {
        const data = await readFile(pathData);

        const idxData = data.findIndex(dataFounded => dataFounded.id === id);

        const oldData = {...data[idxData]};

        data[idxData] = {id, ...newData};

        await createFile(data, pathData);

        return oldData;

    } catch (error) {
        throw new Error(`Failed to updated data in Utils, Error:${error}`);
    }
}

export const deleteData = async (id,pathData) =>{
    try {
        const data = await readFile(pathData);

        const indexData =  data.findIndex(dataFounded =>dataFounded.id === id);

        if (indexData === -1) throw new Error('Data not Found');

        const dataToDelete =  data[indexData];

        data.splice(indexData,1);

        await createFile(data, pathData);

        return dataToDelete;
    } catch (error) {
        throw new Error(`Failed to deleted data in Utils, Error:${error}`);
    }
}