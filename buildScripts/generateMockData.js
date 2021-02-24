/* This script generates mock data for local development.
  This way oyu don't have to point to an actual API,
  but you can enjot realistic, but randomized data,
  and rapid page loads due to local, static data.
*/

/* eslist-disable no-console */

import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/db.json", json, function (err) {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green("Mocka data generated"));
  }
})
