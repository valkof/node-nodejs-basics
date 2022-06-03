import { stdin, stdout } from "process";
import { Transform } from "stream";

const transformStream = new Transform({
  writableObjectMode: true,

  transform(chunk, _, callback) {
    const data = chunk.reverse().toString().trim();
    callback(null, data + '\n')
  }
})

export const transform = async () => {
  stdin.pipe(transformStream).pipe(stdout);
};

transform();