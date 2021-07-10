export type APIConfig = {
  server: string;
  loginPath: string;
};

export type APIConfigDictionary = {
  [key: string]: APIConfig
};

export const API_CONFIGURATIONS: APIConfigDictionary = {
  'dev': {
    server: 'http://localhost:3000',
    loginPath: '/api/v1/login',
  },
};

export type BackendToken = keyof APIConfigDictionary;

export const USE_BACKEND: BackendToken = 'dev';
