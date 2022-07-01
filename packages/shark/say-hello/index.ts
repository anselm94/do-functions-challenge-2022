import { registerShark } from './api/do-function-challenge'
import console = require('console')

const log = console.log

const SHARK_NAME = 'anselm94'
const SHARK_TYPE = 'sammy'

const main = async () => {

  let response: {
    OK: boolean,
    data: any
  } = {
    OK: false,
    data: {}
  }

  try {
    log('registering my shark - %s of type - %s to DigitalOcean Aquarium...', SHARK_NAME, SHARK_TYPE)
    response.data = await registerShark(SHARK_NAME, SHARK_TYPE)
    response.OK = true
    log('successfully registered my shark - %s of type - %s to DigitalOcean Aquarium', SHARK_NAME, SHARK_TYPE)
  } catch (error) {
    log('error while registering my shark - %s of type - %s to DigitalOcean Aquarium - %s', SHARK_NAME, SHARK_TYPE, error)
    response.data = error
  }

  return {
    body: response
  }
}

export default main
