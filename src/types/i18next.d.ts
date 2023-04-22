import "i18next";

import {AuthKeysLabels, GeneralKeysLabels} from './i18n/types'

declare module 'i18next' {
    interface CustomTypeOptions {
      resources: {
        auth: AuthKeysLabels,
        general: GeneralKeysLabels
      }
    }
  }
  