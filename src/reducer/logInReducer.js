import { LOG_IN, START, SUCCESS, FAIL } from '../constants'
import { Record } from 'immutable'

const DefaultReducerState = Record({
    loading: false,
    loaded: false,
    error: false,
    isLoginCorrect: null,
    isPasswordCorrect: null
})

export default (state = new DefaultReducerState({}), action) => {
    const { type, isLoginCorrect, isPasswordCorrect } = action

    switch(type) {
        case LOG_IN + START:
            return state
                    .set('error', false)
                    .set('loading', true)
                    .set('isLoginCorrect', null)
                    .set('isPasswordCorrect', null)

        case LOG_IN + SUCCESS:
            return state
                    .set('loading', false)
                    .set('error', false)
                    .set('loaded', true)

        case LOG_IN + FAIL:
            return state
                    .set('loaded', false)
                    .set('loading', false)
                    .set('error', true)
                    .set('isLoginCorrect', isLoginCorrect)
                    .set('isPasswordCorrect', isPasswordCorrect)
    }

    return state
}
