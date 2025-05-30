declare global {
    namespace NodeJS {
      interface ProcessEnv {
        PORT: string;
        HOST: string;
        NODE_ENV: 'development' | 'production';
        TRUST_PROXY:string;
        MAX_REQUEST_PER_WINDOW:string;

        MONGO_URI: string;
        JWT_SECRET: string;
        ACCESS_TOKEN_SECRET: string;
        ACCESS_TOKEN_EXPIRES_IN: string;
      }
    }
}

export {}