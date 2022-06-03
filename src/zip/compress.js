import { createReadStream, createWriteStream } from "fs";
import { join } from "path";
import { pipeline } from "stream/promises";
import { fileURLToPath, URL } from "url";
import { createGzip } from "zlib";

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const compress = async () => {
  const pathToSourceFile = join(__dirname, 'files', 'fileToCompress.txt');
  const pathToDestinationFile = join(__dirname, 'files', 'archive.gz');
  await pipeline(
    createReadStream(pathToSourceFile),
    createGzip(),
    createWriteStream(pathToDestinationFile)
  );
};

compress();