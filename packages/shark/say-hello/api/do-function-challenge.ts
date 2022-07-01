import axios from 'axios'

const URL_DO_FUNCTIONS_CHALLENGE_API = 'https://functionschallenge.digitalocean.com/api/sammy'

export const registerShark = async (sharkName: string, sharkType: string) => {
    const oParam = {
        name: sharkName,
        type: sharkType
    }

    const { data } = await axios.post(URL_DO_FUNCTIONS_CHALLENGE_API, oParam, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

    return data
}
