import { Express, Router } from 'express';


const addRoutes = (app: Express) => {
  const router = Router();

  /*authRoutes(router);
  postsRoutes(router);
  tagsRoutes(router);
  usersRoutes(router);*/

  app.use('/rest', router);
}

export default addRoutes;