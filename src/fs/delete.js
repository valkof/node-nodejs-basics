import { rm } from "fs/promises";
import { join } from "path";
import { fileURLToPath, URL } from "url";

export const remove = async () => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url));
  const pathToFile = join(__dirname, 'files', 'fileToRemove.txt');
  await rm(pathToFile).catch(() => {
    throw new Error('FS operation failed');
  }) 
};

//npm run fs:delete
remove();