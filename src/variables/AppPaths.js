// todo: for GitHub Pages use. Remove for production.
const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://nymless.github.io/zlatmax-store-front';

// const BASE_URL = process.env.REACT_APP_BASE_URL;

export class AppPaths {
  static API_URL = `${BASE_URL}/api/`;
  static IMG_URL = `${BASE_URL}/static/img/`;
}
