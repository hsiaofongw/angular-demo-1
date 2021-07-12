type APIConfig = {
  server: string;
  getAllArticlesPath: string;
};

type APIConfigMap = {
  [key: string]: APIConfig;
};

export const API_CONFIG: APIConfigMap = {
  'dev': {
    server: 'http://localhost:3000',
    getAllArticlesPath: '/api/v1/articles',
  },
};

export const CURRENT_BACKEND: keyof APIConfigMap = 'dev';
