import { copyFile, mkdir, readdir } from "fs/promises";
import { join } from "path";
import { fileURLToPath, URL } from "url";

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const copy = async () => {
  const pathToSourseDir = join(__dirname, 'files');
  const pathToDestinationDir = join(__dirname, 'files_copy');
  await mkdir(pathToDestinationDir).catch(() => {
    throw new Error('FS operation failed');
  });
  const files = await readdir(pathToSourseDir, {withFileTypes: true}).then((dirents) => {
    return dirents.filter((dirent) => dirent.isFile());
  }).catch(() => {
    throw new Error('FS operation failed');
  });
  for (const file of files) {
    const pathToSourseFile = join(pathToSourseDir, file.name);
    const pathToDestinationFile = join(pathToDestinationDir, file.name)
    await copyFile(pathToSourseFile, pathToDestinationFile);
  }
};

copy();