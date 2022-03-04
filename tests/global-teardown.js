module.exports = async() => {
  console.log('Stopping services...')
  await global.DOCKER.down();
}
