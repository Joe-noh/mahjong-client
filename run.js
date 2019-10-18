const fs = require('fs')
const path = require('path')
const childProcess = require('child_process')

const packages = path.resolve(__dirname, 'packages')
const args = process.argv.slice(2)

fs.readdirSync(packages).forEach((package) => {
  const opts = {
    env: process.env,
    stdio: 'inherit',
    cwd: path.join(packages, package)
  }

  childProcess.spawn('npm', args, opts)
})
