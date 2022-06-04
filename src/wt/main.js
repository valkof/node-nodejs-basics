import { Worker } from "worker_threads";
import { fileURLToPath, URL } from "url";
import { join } from "path";
import { cpus } from "os";

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const performCalculations = async () => {
  const numCpus = cpus().length;
  const arrayFibonacci = [];
  for (let index = 0; index < numCpus; index++) {
    const worker = new Worker(join(__dirname, 'worker.js'), {workerData: 10 + index});
    worker.on('message', (value) => {
      arrayFibonacci.push({id: worker.threadId, status: 'resolved', data: value});
      if (arrayFibonacci.length === numCpus) {
        console.log(arrayFibonacci.sort((a, b) => a.id - b.id).map((el) => {
          return {status: el.status, data: el.data};
        }));
      }
    });
    worker.on('error', () => {
      arrayFibonacci.push({id: worker.threadId, status: 'error', data: null});
      if (arrayFibonacci.length === numCpus) {
        console.log(arrayFibonacci.sort((a, b) => a.id - b.id).map((el) => {
          return {status: el.status, data: el.data};
        }));
      }
    });
  }
};

performCalculations();