const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.post('/run-command', (req, res) => {
  const command = req.body.command;
  exec(command, (err, stdout, stderr) => {
    if (err) {
      res.status(500).send(stderr);
    } else {
      res.send(stdout);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
