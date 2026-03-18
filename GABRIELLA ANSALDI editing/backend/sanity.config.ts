import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import { structure } from './deskStructure'

export default defineConfig({
  basePath: '/', 
  name: 'jessica-spagnolo-website',
  title: 'Jessica Spagnolo Website',

  projectId: 'i11kflit',
  dataset: 'production',

  plugins: [structureTool({structure})],

  schema: {
    types: schemaTypes,
  },
})
