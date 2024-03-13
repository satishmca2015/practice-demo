
/* 
In Node.js, the Cluster module allows you to create child processes (workers) that share the same server port. This is particularly useful for scaling Node.js applications across multiple CPU cores, taking advantage of parallel processing and improving overall performance and concurrency.
*/

const cluster = require('cluster');
const http = require('http');

if (cluster.isMaster) {
  // Master process
  const numCPUs = require('os').cpus().length;

  console.log(`Master process running with ${numCPUs} workers`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died with code ${code}, signal ${signal}`);
    // Respawn a new worker if needed
  });
} else {
  // Worker process
  const port = 3000;

  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello from worker ' + cluster.worker.id);
  }).listen(port, () => {
    console.log(`Worker ${cluster.worker.id} listening on port ${port}`);
  });
}
