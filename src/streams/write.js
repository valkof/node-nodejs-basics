import { createWriteStream } from "fs";
import { join } from "path";
import { stdin } from "process";
import { fileURLToPath, URL } from "url";

export const write = async () => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url));
  const pathToFile = join(__dirname, 'files', 'fileToWrite.txt');
  const writeStream = createWriteStream(pathToFile);
  stdin.on('data', (data) => {
    writeStream.write(data);
  });
};

//npm run streams:write
write();