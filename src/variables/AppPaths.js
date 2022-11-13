const BASE_URL =
  process.env.REACT_APP_DEPLOY_ENV === 'gh-pages'
    ? 'https://nymless.github.io/zlatmax-store-front'
    : process.env.REACT_APP_BASE_URL;

export class AppPaths {
  static API_URL = `${BASE_URL}/api/`;
  static IMG_URL = `${BASE_URL}/static/img/`;
}
