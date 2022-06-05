import { createReadStream } from "fs";
import { join } from "path";
import { stdout } from "process";
import { fileURLToPath, URL } from "url";

export const read = async () => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url));
  const pathToFile = join(__dirname, 'files', 'fileToRead.txt');
  createReadStream(pathToFile).pipe(stdout);
};

//npm run streams:read
read();