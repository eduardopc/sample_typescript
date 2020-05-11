import express from 'express';

import { sampleRoute, userRoute } from './sampleRoute';

const app = express();

app.get('/', sampleRoute);

app.get('/user', userRoute);

app.listen(3298);