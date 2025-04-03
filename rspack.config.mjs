import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from '@rspack/cli';
import { rspack } from '@rspack/core';
import RefreshPlugin from '@rspack/plugin-react-refresh';

const __dirname = dirname(fileURLToPath(import.meta.url));
const isDev = process.env.NODE_ENV === 'development';

const targets = ['chrome >= 87', 'edge >= 88', 'firefox >= 78', 'safari >= 14'];

export default defineConfig({
  context: __dirname,
  entry: {
    main: './src/index.tsx',
  },
  resolve: {
    extensions: ['...', '.ts', '.tsx', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: 'asset',
      },
      {
        test: /\.(jsx?|tsx?)$/,
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              jsc: {
                parser: {
                  syntax: 'typescript',
                  tsx: true,
                },
                transform: {
                  react: {
                    runtime: 'automatic',
                    development: isDev,
                    refresh: isDev,
                  },
                },
              },
              env: { targets },
            },
          },
        ],
      },
      // ✅ CSS Modules support
      {
        test: /\.module\.css$/,
        type: 'javascript/auto', // Required for CSS Modules in Rspack
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true, // Enables CSS Modules
            },
          },
        ],
      },
      // ✅ Global CSS (non-module)
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|webp|avif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: './public/index.html',
    }),
    isDev ? new RefreshPlugin() : null,
  ].filter(Boolean),
  optimization: {
    minimizer: [
      new rspack.SwcJsMinimizerRspackPlugin(),
      new rspack.LightningCssMinimizerRspackPlugin({
        minimizerOptions: { targets },
      }),
    ],
  },
  experiments: {
    futureDefaults: true, // Keep Rspack's default optimizations
  },
});
