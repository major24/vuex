
import { FETCH_DATA_SUCCESS } from './mutations'

export const LOAD_DATA = 'LOAD_DATA'

export default {
    [LOAD_DATA]: (state) => {
        console.log('actions: fetchData')
        // get data from api call..
        let mockResp =  {
            phoneDetails: {
              types: {
                mobile: {
                  phoneNumber: '4166'
                },
        
                home: {
                  phoneNumber: '9052'
                }
              }
            }
          }
        // call mutations
        state.commit(FETCH_DATA_SUCCESS, mockResp);
    }
}

/*
export default {
    fetchData: (state) => {
        console.log('actions: fetchData')
        // get data from api call..
        let mockResp =  {
            phoneData: {
                mobile: {
                    phoneNumber: '416555'
                },
                home: {
                    phoneNumber: '905777'
                }
            }
        }
        // call mutations
        state.commit(FETCH_DATA_SUCCESS, mockResp);
    }
}
*/