const express = require('express');

const app = express();

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Just for testing');
});

app.post('/', (req, res) => {
  const num = req.body.number;
  let i;
  const fib = []; // Initialize array!
  fib[0] = 0;
  fib[1] = 1;
  for (i = 2; i <= num; i++) {
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  const index = fib[num];

  res.json({ 'Fibonacci number': index });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
