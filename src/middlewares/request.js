import { START, SUCCESS, FAIL } from '../constants'

export default store => next => action => {
    const { type, payload, callAPI } = action
    const isLoginCorrect = (payload.login === 'UserName')
    const isPasswordCorrect = (payload.password === 'Password')
    const isFormCorrect = isLoginCorrect && isPasswordCorrect
    next({type: type + START})

    setTimeout(() => {
        next(isFormCorrect ? {type: type + SUCCESS} : {isPasswordCorrect, isLoginCorrect, type: type + FAIL})
    }, 1000)
}
