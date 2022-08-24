import { rest } from 'msw';
import { users } from '../resources/users';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJlbWFpbCI6Iml2YW5vdkBlbWFpbC5jb20iLCJyb2xlIjoiQURNSU4ifQ.ic6bqMIaCpNTmZTElyv6VDXXOR6vRAjthmi70_Zteww';
const credentials = {
  id: '1',
  email: 'ivanov@email.com',
  role: 'ADMIN',
};

let counter = 1;

export const userHandlers = [
  rest.post(`${BASE_URL}/api/auth/login`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.cookie('access_token', token));
  }),

  rest.get(`${BASE_URL}/api/users/current`, (req, res, ctx) => {
    const reqToken = req.cookies['access_token'];
    if (reqToken === token) {
      const user = users[0];
      return res(ctx.status(200), ctx.json({ data: { user } }));
    } else {
      return res(ctx.status(404));
    }
  }),

  rest.post(`${BASE_URL}/api/auth/registration`, (req, res, ctx) => {
    const user = req.body?.user;
    if (user) {
      Object.defineProperties(user, {
        id: {
          value: counter++,
          enumerable: true,
        },
        role: {
          value: 'USER',
          enumerable: true,
        },
      });
      users.push(user);
      return res(
        ctx.status(200),
        ctx.json({ message: 'User registered', status: 'ok' })
      );
    } else {
      return res(ctx.status(404));
    }
  }),
];
