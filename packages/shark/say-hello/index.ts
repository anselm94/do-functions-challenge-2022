import axios from 'axios'

const log = console.log

type Args = {
  name: string
}

const main = async (args: Args) => {
  let name = args.name || 'stranger da'
  let greeting = 'Hello ' + name + '!'

  log("sending req to %s", "httpbin")
  const { data } = await axios.get('https://httpbin.org/get')
  return {
    body: {
      greeting,
      data
    }
  }
}

export default main
