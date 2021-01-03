type NODE_ENV_TYPE = 'development' | 'testing' | 'staging' | 'production';

export const { APP_NAME } = process.env;

export const NOVE_ENV = process.env.NODE_ENV as NODE_ENV_TYPE;
