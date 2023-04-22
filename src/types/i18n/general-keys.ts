const GeneralKeys = [
    'error'
  ] as const;
  
  export type GeneralKeysType = (typeof GeneralKeys)[number];
  