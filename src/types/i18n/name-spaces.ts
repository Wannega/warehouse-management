export const NameSpaces = [
    'auth'
  ] as const
  
  export type NameSpacesType = (typeof NameSpaces)[number];
