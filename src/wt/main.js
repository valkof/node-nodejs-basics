import { Worker } from "worker_threads";
import { fileURLToPath, URL } from "url";
import { join } from "path";
import { cpus } from "os";

export const performCalculations = async () => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url));
  const numCpus = cpus().length;
  const arrayFibonacci = [];
  
  const getResultWorkers = (arr) => {
    const arrRefactor = arr.sort((a, b) => a.id - b.id).map((el) => {
      return {status: el.status, data: el.data};
    })
    console.log(arrRefactor);
  };

  for (let numWorker = 0; numWorker < numCpus; numWorker++) {
    const worker = new Worker(join(__dirname, 'worker.js'), {workerData: 10 + numWorker});
    worker.on('message', (value) => {
      arrayFibonacci.push({
        id: worker.threadId,
        status: 'resolved', data: value
      });
      if (arrayFibonacci.length === numCpus) return getResultWorkers(arrayFibonacci);
    });
    worker.on('error', () => {
      arrayFibonacci.push({
        id: worker.threadId,
        status: 'error', data: null
      });
      if (arrayFibonacci.length === numCpus) return getResultWorkers(arrayFibonacci);
    });
  }
};

//npm run wt:main
performCalculations();