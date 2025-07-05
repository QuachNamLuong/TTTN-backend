import app from './app.js';
import { serverConfig } from './config/server.config.js';

if (!serverConfig.port) {
  console.error('.env PORT is undefined! Please set it in your .env file.');
  process.exit(1);
}

app.listen(serverConfig.port, () => {
  console.log(`Server running at http://localhost:${serverConfig.port}`);
});