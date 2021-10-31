type NODE_ENV_TYPE = 'development' | 'testing' | 'staging' | 'production';

// NOTE: destructureで書こうとすると何故かエラーが出る
/* eslint-disable prefer-destructuring */
export const APP_NAME = process.env.APP_NAME;
export const APP_URL = process.env.APP_URL;
/* eslint-enable prefer-destructuring */

export const NOVE_ENV = process.env.NODE_ENV as NODE_ENV_TYPE;
