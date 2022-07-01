# DigitalOcean Functions Challenge 2022

I'm late to the party! The DigitalOcean [DO] has announced [DigitalOcean Functions Challenge](https://www.digitalocean.com/community/pages/functions-challenge) which is happening June 7 - July 7, 2022. Read more about the challenge [here](https://www.digitalocean.com/community/pages/functions-challenge).

This is a [NPM Workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces) based monorepo and a Typescript project

## Build & Deploy

### 1. Test in DO development namespace

#### Prerequisites

1. Install `doctl` CLI - [docs](https://docs.digitalocean.com/reference/doctl/how-to/install/)
2. Login into DigitalOcean - [docs](https://docs.digitalocean.com/reference/doctl/reference/auth/init/)
3. Setup `doctl` for DigitalOcean's Serverless Functions 
   ```sh
   doctl serverless install
   doctl serverless connect
   ```

#### Steps

1. Clone and install NPM dependencies

```sh
# git clone
git clone https://github.com/anselm94/do-functions-challenge-2022.git
cd do-functions-challenge-2022

# install npm modules
npm i
```

2. Build the Typescript files
```sh
npm run build
```

3. Deploy to DigitalOcean's Functions
> Warn
>
> Don't forget to update the Shark Name & Shark Type [here](./packages/shark/say-hello/index.ts#L6-L7) before deploying!
```sh
doctl serverless deploy .
```

4. Verify the deployed function
```sh
doctl serverless functions invoke shark/say-hello
```

## License

```
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.

In jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to https://opensource.org/licenses/unlicense
```