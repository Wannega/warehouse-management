const AuthKeys = [
  'sign-in',
  'sign-in-title',
  'email',
  'password',
  'remember-me',
  'forgot-password',
  'no-account',

  'forgot-password-title',
  'send-code',
  'email-not-found',
  'email-send-success',
  'reset',
  'reset-password-title',
  'password-confirmation',
  'password-reset-success'
] as const;

export type AuthKeysType = (typeof AuthKeys)[number];
