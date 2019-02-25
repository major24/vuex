export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export default {
    [FETCH_DATA_SUCCESS](state, payload) {
        console.log('mutations: fetch data success');
        console.log(state);
        console.log(payload)
        state.phoneDetails = {...state.phoneDetails, ...payload.phoneDetails};
    }
}