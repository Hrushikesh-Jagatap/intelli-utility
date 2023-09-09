const requestToCurl = (req) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  `curl '${req.protocol}://${req.get('host')}${req.originalUrl}' -X ${req.method} -H 'Content-Type: ${req.get(
    'Content-Type',
  )}' -d '${JSON.stringify(req.body)}'`;
module.exports = requestToCurl;
