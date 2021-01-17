import { Router } from 'express';

const appointmentsRoutes = Router();

appointmentsRoutes.get('/', (request, response) => {
  return response.json({ ok: true });
});

appointmentsRoutes.post('/', (request, response) => {
  return response.json({ ok: true });
});

appointmentsRoutes.put('/', (request, response) => {
  return response.json({ ok: true });
});

appointmentsRoutes.delete('/', (request, response) => {
  return response.status(204).send();
});

export default appointmentsRoutes;
