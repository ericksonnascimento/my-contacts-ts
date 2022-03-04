const path = require('path');
const testcontainers = require('testcontainers');
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const prismaBinary = './node_modules/.bin/prisma2'

module.exports = async () => {

  const composeFilePath = path.resolve('./');
  const composeFile = 'docker-compose-test.yml';

  console.log('Starting services...');

  const environment = await new testcontainers.DockerComposeEnvironment(composeFilePath, composeFile)
              .withWaitStrategy('db_1', testcontainers.Wait.forLogMessage('database system is ready to accept connections'))
              .up();

  await exec(`${prismaBinary} migrate dev`);
  global.DOCKER = environment;
}
