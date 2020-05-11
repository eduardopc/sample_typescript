import { Request, Response } from 'express';

import createUser from './services/CreateUserDTO';

export function sampleRoute(req: Request, res: Response) {
  return res.json({ message: 'Learning TS'});
};

export function userRoute(req: Request, res: Response) {
  const user = createUser({
    name: 'Eduardo',
    email: 'eduardo@test.com',
    password: '123456',
    lastWorks: ['Google', 'Spotify'],
    techs: [
      'Node.js', 
      'React', 
      { tech: 'React Native', experience: 'Advanced'}
    ]
  });

  return res.json(user);
};