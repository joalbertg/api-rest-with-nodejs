import '@babel/polyfill';

import app from  './server';
import { connect } from './database';

const PORT = app.get('port');
const main = async () => {
  await app.listen(PORT);
  await connect();
  console.info(`Server on port, ${PORT}`);
}

main();
