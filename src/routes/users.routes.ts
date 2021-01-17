import { Router } from 'express';

const usersRoutes = Router();

usersRoutes.get('/', (request, response) => {
  return response.json({ ok: true });
});

usersRoutes.post('/', (request, response) => {
  return response.json({ ok: true });
});

usersRoutes.put('/', (request, response) => {
  return response.json({ ok: true });
});

usersRoutes.delete('/', (request, response) => {
  return response.status(204).send();
});

export default usersRoutes;
