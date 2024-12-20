import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 1, skills: []
}

const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value += 1;
        },
        decrement(state) {
            state.value -= 1
        },
        addSkill(state, { payload }) {

            state.skills = payload.skills;

        }
    }
});

export const { increment, decrement, addSkill } = CounterSlice.actions

export default CounterSlice
