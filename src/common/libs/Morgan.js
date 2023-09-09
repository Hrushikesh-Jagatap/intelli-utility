const reqFormat = (tokens, req, res) =>
  JSON.stringify({
    msg: [
      tokens['remote-addr'](req, res),
      tokens['remote-user'](req, res),
      tokens.method(req, res),
      tokens.url(req, res),
      'HTTP/',
      tokens['http-version'](req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'),
      '-',
      tokens['response-time'](req, res),
      'ms',
    ].join(' '),
    status: tokens.status(req, res),
    request: tokens.url(req, res),
    method: tokens.method(req, res),
    responseSize: tokens.res(req, res, 'content-length'),
    responseTime: tokens['response-time'](req, res),
  });

module.exports = reqFormat;
