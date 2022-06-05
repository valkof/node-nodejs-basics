import { spawn } from "child_process";
import { join } from "path";
import { fileURLToPath, URL } from "url";

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const spawnChildProcess = async (args) => {
  const child = spawn('node', ['script.js', ...args], {
    cwd: join(__dirname, 'files'),
    stdio: ['pipe', 'pipe', 'pipe', 'ipc']
  });
  child.stdout.on('data', (chunk) => {
    process.stdout.write(chunk.toString());
  });
  process.stdin.on('data', (chunk) => {
    child.stdin.write(chunk.toString());
  })
  child.on('close', () => {
    process.exit();
  })
};

//npm run cp:cp
spawnChildProcess([1, 2, 3, 4, 5]);