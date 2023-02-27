import type { CodegenConfig } from '@graphql-codegen/cli'
import { supabaseAnonKey, supabaseUrl } from './src/constants'

const config: CodegenConfig = {
  overwrite: true,
  schema: `${supabaseUrl}/graphql/v1?apikey=${supabaseAnonKey}`,
  documents: 'src/**/*.{ts,tsx}',
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
      config: {
        dedupeFragments: true,
      },
    },
  },
  ignoreNoDocuments: true,
}

export default config
