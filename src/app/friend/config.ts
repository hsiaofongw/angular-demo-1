export type APIConfig = {
  server: string;
  getAllFriendPath: string;
};

export type APIConfigDictionary = {
  [key: string]: APIConfig;
};

export const API_CONFIGURATIONS: APIConfigDictionary = {
  'dev': {
    server: 'http://localhost:3000',
    getAllFriendPath: '/api/v1/friends',
  },
};

export const USE_BACKEND: keyof APIConfigDictionary = 'dev';
