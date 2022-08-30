import { rest } from 'msw';
import { users } from '../resources/users';
import { AppPaths } from '../../variables/AppPaths';

const jwt = require('jsonwebtoken');

const notSoSecretKey = 'your-256-bit-secret';
let counter = 1;

export const userHandlers = [
  rest.post(AppPaths.API_URL + 'auth/login', (req, res, ctx) => {
    const { email, password } = req.body.loginCredentials;
    const user = users.find(
      (user) => user.email === email && user.password === password,
    );

    if (!user) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: `Пользователь не найден`,
        }),
      );
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      notSoSecretKey,
      { expiresIn: '24h' },
    );
    return res(
      ctx.status(200),
      ctx.cookie('access_token', token, {
        httpOnly: true,
      }),
      ctx.cookie('logged_in', 'true'),
    );
  }),

  rest.get(AppPaths.API_URL + 'users/current', (req, res, ctx) => {
    const accessToken = req.cookies['access_token'];

    try {
      const { id, email, role } = jwt.verify(accessToken, notSoSecretKey);
      const user = users.find(
        (user) => user.id === id && user.email === email && user.role === role,
      );

      if (!user) {
        return res(
          ctx.status(403),
          ctx.json({
            errorMessage: `Пользователь не найден`,
          }),
        );
      }

      const { password, ...userForClient } = user;
      return res(ctx.status(200), ctx.json({ data: { user: userForClient } }));
    } catch (error) {
      console.error({ message: 'Ключ не прошел валидацию', error });
      return res(ctx.status(403));
    }
  }),

  rest.post(AppPaths.API_URL + 'auth/registration', (req, res, ctx) => {
    const user = req.body?.user;

    if (!user) {
      return res(ctx.status(404));
    }

    Object.defineProperties(user, {
      id: {
        value: ++counter,
        enumerable: true,
      },
      role: {
        value: 'USER',
        enumerable: true,
      },
    });

    if (user.middleName === '') {
      user.middleName = null;
    }

    users.push(user);
    return res(
      ctx.status(200),
      ctx.json({ message: 'User registered', status: 'ok' }),
    );
  }),
];
