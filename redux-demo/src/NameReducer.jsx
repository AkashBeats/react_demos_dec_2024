const initialState = {
    firstName: 'Guest',
    lastName: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case 'CHANGE_FIRST_NAME':
            return { ...state, ...payload }
        case 'CHANGE_LAST_NAME':
            return { ...state, ...payload }
        default:
            return state
    }
}
