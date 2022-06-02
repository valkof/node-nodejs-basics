import { stdin, stdout } from "process";

export const transform = async () => {
  stdin.on('data', (chunk) => {
    const reserveStroka = chunk.reverse().toString().trim();
    stdout.write(reserveStroka);
    stdout.write('\n'); 
  })
};

transform();