import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
  server: {
    APP_URL: z.string().url(),
  },

  client: {
    NEXT_PUBLIC_API_URL: z.string().url(),
  },

  clientPrefix: 'NEXT_PUBLIC_',

  runtimeEnv: {
    APP_URL: process.env.APP_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
})

