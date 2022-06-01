import { argv } from "process";

export const parseArgs = () => {
  const arrayKey = []
  argv.slice(2).forEach((value, i, arr) => {
    if (value.indexOf('--') == 0) {
      arrayKey.push(`${value.slice(2)} is ${arr[i + 1]}`);
    }
  });
  console.log(arrayKey.join(', '));
};

parseArgs();