import { readdir } from "fs/promises";
import { join } from "path";
import { fileURLToPath, URL } from "url";

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const list = async () => {
  const pathToDir = join(__dirname, 'files');
  await readdir(pathToDir, {withFileTypes: true}).then((dirents) => {
    dirents.forEach((dirent) => {
      if (dirent.isFile()) console.log(dirent.name);
    })
  }).catch(() => {
    throw new Error('FS operation failed');
  });
};

list();