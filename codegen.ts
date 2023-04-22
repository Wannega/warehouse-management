import { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: 'https://wms-backend-6og4.onrender.com/graphql',
  documents: ['src/schemas/**/*.graphql'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/schemas/generated.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true
      }
    }
  }
}
 
export default config