const { execSync } = require('child_process')
const { readFileSync } = require('fs')
const hosts = require('./config/hosts.json')

function addAliases(aliases, prefix) {
  const currentHosts = readFileSync('/etc/hosts').toString()

  const newHosts = aliases
    .reduce(
      (result, { host, ip }) => {
        if (currentHosts.includes(host)) {
          console.warn(`warn: host ${host} is already exists in /etc/hosts`)

          return result
        }

        return [...result, `${ip} ${host}`]
      },
      [
        `############\n### express-host-aliases\n${
          prefix ? `### service: ${prefix}\n` : ''
        }`
      ]
    )
    .concat('\n############\n')

  if (newHosts.length > 2) {
    execSync(`sudo sh -c "echo '${newHosts.join('\n')}' >> /etc/hosts"`)
  }
}

;(function () {
  addAliases(hosts, 'ssr-project-name')
})()
