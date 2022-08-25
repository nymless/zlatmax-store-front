import { rest } from 'msw';
import { users } from '../resources/users';

const jwt = require('jsonwebtoken');

const BASE_URL = process.env.REACT_APP_BASE_URL;
const notSoSecretKey = 'your-256-bit-secret';
let counter = 1;

export const userHandlers = [
  rest.post(`${BASE_URL}/api/auth/login`, (req, res, ctx) => {
    const { email, password } = req.body.loginCredentials;
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: `Пользователь не найден`,
        })
      );
    }
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      notSoSecretKey,
      { expiresIn: '24h' }
    );

    return res(ctx.status(200), ctx.cookie('access_token', token));
  }),

  rest.get(`${BASE_URL}/api/users/current`, (req, res, ctx) => {
    const accessToken = req.cookies['access_token'];

    try {
      const { id, email, role } = jwt.verify(notSoSecretKey, accessToken);
      const user = users.find(
        (user) => user.id === id && user.email === email && user.role === role
      );

      if (!user) {
        return res(
          ctx.status(403),
          ctx.json({
            errorMessage: `Пользователь не найден`,
          })
        );
      }

      const { password, ...userForClient } = user;

      return res(ctx.status(200), ctx.json({ data: { userForClient } }));
    } catch (error) {
      console.error(error);
      return res(ctx.status(403));
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
