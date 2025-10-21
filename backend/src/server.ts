/**

 * Backend service entry point.
 * 
 * Responsibilities:
 * - Configure the Express app (JSON parsing, basic middleware).
 * - Expose a /health endpoint for readiness/liveness checks.
 * - Start an HTTP server on the configured port.
 */
import express from 'express';

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;

/**
 * Parse incoming JSON request bodies.
 * This is safe-by-default and required for typical REST APIs.
 */
app.use(express.json());

/**
 * Health check endpoint used by CI/CD, containers, and load balancers.
 * Returns 200 OK when the service is responsive.
 */
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

/**
 * Start the HTTP server and log a concise startup message.
 */
app.listen(PORT, () => {
  console.log(`[backend] listening on http://localhost:${PORT}`);
});