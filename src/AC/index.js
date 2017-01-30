import { LOG_IN } from '../constants'

export function makeRequest(login, password) {
    return {
        type: LOG_IN,
        payload: {
            login,
            password
        }
    }
}
