// Express server
import { createProxyMiddleware } from 'http-proxy-middleware';
import express from 'express';
const app = express();
const PORT = process.env.PORT || 8080

// TODO: Do env switch or something...
// 1. Local development
// app.use('/assets', express.static(__dirname + '/assets'));
// 2. Proxy solution for assets, when actually online
app.use('/assets', createProxyMiddleware({ target: 'https://storage.googleapis.com/{BUCKET_NAME}/', changeOrigin: true }));

// React app
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from './App';
import { getHtml } from './helpers/getHtml';
import { style } from './helpers/style';

/**
 * @description React server-side rendering
 */
const render = async (location: string) => {
  const REACT_HTML = renderToString(
    <StaticRouter location={location} context={{}}>
      <App data={'asdf'} />
    </StaticRouter>
  );

  const body = getHtml({
    title: 'React SSR on Cloud Run',
    body: REACT_HTML,
    data: Date.now(),
    styles: style
  });

  return body;
};

/**
 * @description Express webserver
 */
app.get('*', async (req, res) => {
  const html = await render(req.url);
  res.send(html);
});

async function startServer() {
  try {
    app.listen(PORT, () => console.log(`App has started listening on port ${PORT}!`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();