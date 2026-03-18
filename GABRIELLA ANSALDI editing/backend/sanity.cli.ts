import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'i11kflit',
    dataset: 'production'
  },
  deployment: {

    autoUpdates: false,
  }
})
