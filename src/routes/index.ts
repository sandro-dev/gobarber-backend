import { Router } from 'express';

import usersRoutes from './users.routes';
import sessionsRoutes from './sessions.routes';
import appointmentsRoutes from './appointments.routes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/sessions', sessionsRoutes);
routes.use('/appointments', appointmentsRoutes);

export default routes;
