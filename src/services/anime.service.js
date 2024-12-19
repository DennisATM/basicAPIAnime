import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

export const createFile = async (data, pathData)=>{
    try {
        const dataFilePath = path.join(__dirname,`../data/${pathData}`);
        
        await fs.mkdir(path.dirname(dataFilePath),{recursive:true});
        await fs.writeFile(dataFilePath, JSON.stringify(data, null, 4),'utf-8');

    } catch (error) {
        throw new Error(`Failed to created Data in Services, Error:${error}`);
    }
}

export const readFile = async (pathData) => {
    try {
        const datafilePath = path.join(__dirname, `../data/${pathData}`)

        const data = await fs.readFile(datafilePath, 'utf8')
        return JSON.parse(data)
    } catch (error) {
        console.error(`Failed to reading file in Services, Error: ${error}` )
        return null
    }
}