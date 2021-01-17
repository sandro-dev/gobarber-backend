import { Router } from 'express';

const sessionsRoutes = Router();

sessionsRoutes.post('/', (request, response) => {
  return response.json({ ok: true });
});

export default sessionsRoutes;
