import { readFile } from "fs/promises";
import { join } from "path";
import { fileURLToPath, URL } from "url";

export const read = async () => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url));
  const pathToFile = join(__dirname, 'files', 'fileToRead.txt');
  await readFile(pathToFile, 'utf-8').then((content) => {
    console.log(content);
  }).catch(() => {
    throw new Error('FS operation failed');
  })
};

//npm run fs:read
read();