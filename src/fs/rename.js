import * as fsp from "fs/promises";
import { join } from "path";
import { fileURLToPath, URL } from "url";

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const rename = async () => {
  const pathToOldFile = join(__dirname, 'files', 'wrongFilename.txt');
  const pathToNewFile = join(__dirname, 'files', 'wrongFilename.md');
  await fsp.rename(pathToOldFile, pathToNewFile).catch(() => {
    throw new Error('FS operation failed');
  });
};

rename();