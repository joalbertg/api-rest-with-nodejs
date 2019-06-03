import '@babel/polyfill';

import app from  './server';

const PORT = app.get('port');
const main = async () => {
  await app.listen(PORT);
  console.info(`Server on port, ${PORT}`);
}

main();
