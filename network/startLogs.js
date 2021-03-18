function makeStartLogsText(hosts, protocol = 'https', port) {
  return `Running on: ${hosts
    .map((host) => `* ${protocol}://${host}:${port}`)
    .join('\n')}`
}

module.exports = {
  makeStartLogsText: makeStartLogsText
}
