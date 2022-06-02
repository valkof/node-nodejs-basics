import { createHash } from "crypto";
import { readFile } from "fs/promises";
import { join } from "path";
import { fileURLToPath, URL } from "url";

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const calculateHash = async () => {
  const pathToFile = join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  const hash = createHash('sha256');
  const hashHex = await readFile(pathToFile, 'utf-8').then((content) => {
    hash.update(content);
    return hash.digest('hex');
  }).catch(() => {
    return null;
  });
  return hashHex;
};

calculateHash().then((hash) => {
  console.log(hash);
});