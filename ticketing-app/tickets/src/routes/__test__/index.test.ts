import request from 'supertest';
import { app } from '../../app';

import { mockCookie } from '../../test/setup'

const createTicket = () => {
  return request(app).post('/api/tickets').set('Cookie', mockCookie()).send({
    title: 'asldkf',
    price: 20,
  });
};

it('can fetch a list of tickets', async () => {
  await createTicket();
  await createTicket();
  await createTicket();

  const response = await request(app).get('/api/tickets').send().expect(200);

  expect(response.body.length).toEqual(3);
});
