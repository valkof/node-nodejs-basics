import { copyFile, mkdir, readdir } from "fs/promises";
import { join } from "path";
import { fileURLToPath, URL } from "url";

export const copy = async () => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url));
  const pathToSourseDir = join(__dirname, 'files');
  const pathToDestinationDir = join(__dirname, 'files_copy');
  
  const copyElements = async (pathToSourseDir, pathToDestinationDir) => {
    await mkdir(pathToDestinationDir).catch(() => {
      throw new Error('FS operation failed');
    });
    const elements = await readdir(pathToSourseDir, {withFileTypes: true}).then((dirents) => {
      const elements = {files: [], directory: []};
      dirents.forEach((dirent) => dirent.isFile() ? elements.files.push(dirent) : elements.directory.push(dirent));
      return elements;
    }).catch(() => {
      throw new Error('FS operation failed');
    });
    for (const file of elements.files) {
      const pathToSourseFile = join(pathToSourseDir, file.name);
      const pathToDestinationFile = join(pathToDestinationDir, file.name);
      await copyFile(pathToSourseFile, pathToDestinationFile);
    };
    for (const directory of elements.directory) {
      const pathToSourseDirectory = join(pathToSourseDir, directory.name);
      const pathToDestinationDirectory = join(pathToDestinationDir, directory.name);
      await copyElements(pathToSourseDirectory, pathToDestinationDirectory);
    }
  }
  
  await copyElements(pathToSourseDir, pathToDestinationDir);
};

//npm run fs:copy
copy();