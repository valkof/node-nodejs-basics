import { env } from "process";

export const parseEnv = () => {
  const arrayKey = [];
  Object.entries(env).forEach((property) => {
    arrayKey.push(`RSS_${property[0]}=${property[1]}`);
  });
  console.log(arrayKey.join('; '));
};

parseEnv();