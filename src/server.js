import app from './app.js';

const PORT = process.env.PORT;

if (!PORT) {
  console.error('.env PORT is undefined! Please set it in your .env file.');
  process.exit(1);
}

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});