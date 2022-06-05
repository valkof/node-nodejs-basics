import { createReadStream, createWriteStream } from "fs";
import { join } from "path";
import { pipeline } from "stream/promises";
import { fileURLToPath, URL } from "url";
import { createGzip } from "zlib";

export const compress = async () => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url));
  const pathToSourceFile = join(__dirname, 'files', 'fileToCompress.txt');
  const pathToDestinationFile = join(__dirname, 'files', 'archive.gz');
  await pipeline(
    createReadStream(pathToSourceFile),
    createGzip(),
    createWriteStream(pathToDestinationFile)
  );
};

//npm run zip:compress
compress();