import { rm } from "fs/promises";
import { join } from "path";
import { fileURLToPath, URL } from "url";

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const remove = async () => {
  const pathToFile = join(__dirname, 'files', 'fileToRemove.txt');
  //const pathToFile = join(__dirname, 'files', '123.txt');
  await rm(pathToFile).catch(() => {
    throw new Error('FS operation failed');
  }) 
};

remove();