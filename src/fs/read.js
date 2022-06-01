import { readFile } from "fs/promises";
import { join } from "path";
import { fileURLToPath, URL } from "url";

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const read = async () => {
  const pathToFile = join(__dirname, 'files', 'fileToRead.txt');
  await readFile(pathToFile, 'utf-8').then((content) => {
    console.log(content);
  }).catch(() => {
    throw new Error('FS operation failed');
  })
};

read();