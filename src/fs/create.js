import { writeFile } from "fs/promises";
import { join } from "path";
import { fileURLToPath, URL } from "url";

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const create = async () => {
  const pathToFile = join(__dirname, 'files', 'fresh.txt');
  const contentFile = 'I am fresh and young';
  await writeFile(pathToFile, contentFile, {flag: 'wx'}).then(() => {
    console.log('file created successfully');
  }).catch(() => {
    throw new Error('FS operation failed');
  });
};

create();