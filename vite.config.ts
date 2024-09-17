import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path'


export default defineConfig({
  plugins: [react()],
  server:{
    open:'/dashboard/invoice'
  },
  resolve: {
    alias: {
      
      // @ts-ignore
       'components':path.resolve(__dirname, './src/components'),
       // @ts-ignore
      "assets": path.resolve(__dirname, './src/assets'),
      // @ts-ignore
      "hoc": path.resolve(__dirname, './src/hoc'),
      // @ts-ignore
      "interfaces": path.resolve(__dirname, './src/interfaces'),
      // @ts-ignore
      "store": path.resolve(__dirname, './src/store'),
      // @ts-ignore
      "routes": path.resolve(__dirname, './src/routes'),
      // @ts-ignore
      "pages": path.resolve(__dirname, './src/pages'),
      //@ts-ignore
      "utils":path.resolve(__dirname, './src/utils'),
      
    },
  },
})
