import { env } from "process";

export const parseEnv = () => {
  const arrayKey = [];
  Object.entries(env).forEach((property) => {
    if (property[0].indexOf('RSS_') == 0) {
      arrayKey.push(`${property[0]}=${property[1]}`);
    };
  });
  console.log(arrayKey.join('; '));
};

//npm run cli:env
//or
//RSS_name1=value1 RSS_name2=value2 node ./src/cli/env.js
parseEnv();