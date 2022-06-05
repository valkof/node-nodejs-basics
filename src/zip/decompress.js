import { createReadStream, createWriteStream } from "fs";
import { join } from "path";
import { pipeline } from "stream/promises";
import { fileURLToPath, URL } from "url";
import { createUnzip } from "zlib";

export const decompress = async () => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url));
  const pathToSourceFile = join(__dirname, 'files', 'archive.gz');
  const pathToDestinationFile = join(__dirname, 'files', 'fileToCompress.txt');
  await pipeline(
    createReadStream(pathToSourceFile),
    createUnzip(),
    createWriteStream(pathToDestinationFile)
  );
};

//npm run zip:decompress
decompress();