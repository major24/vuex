import { shallowMount, createLocalVue } from '@vue/test-utils'
import PhoneMutateState from '@/components/phone/PhoneMutateState.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

// INJECT STATE, TO ENABLE COMPONENT...
// store.state.phoneDetails.types.mobile.phoneNumber

describe('PhoneMutateState.vue', () => {
  it('renders component and value from $store.state', () => {
    const wrapper = shallowMount(PhoneMutateState, {
      mocks: {
        $store: {
          state: {
            phoneDetails: {
              types: {
                mobile: {
                  phoneNumber: '647-777'
                },
                home: {
                  phoneNumber: '647-999'
                }
              }
            }
          }
        }
      },

      localVue
    });

    expect(wrapper).toBeDefined();
    // console.log(wrapper.html());
  })
})

// Test mutations
describe('PhoneMutateState.vue', () => {
    let store
    let mutations
  
    beforeEach(() => {
      mutations = {
        updateMobilePhone: jest.fn()
      }
  
      store = new Vuex.Store({
        mutations
      });
    });
  
    it('mutates state mobile number', () => {
      const wrapper = shallowMount(PhoneMutateState, {
        store,
        localVue
      });
      
      let state = {}
      mutations.updateMobilePhone(state, {phoneNumber: '999-000'})
      expect(mutations.updateMobilePhone.mock.calls).toHaveLength(1);
      expect(mutations.updateMobilePhone.mock.calls[0][1]).toEqual({phoneNumber: '999-000'});
    });
});



// Test mutations with store
describe('PhoneMutateState.vue', () => {
    let store
    let mutations
    let state = {
            phoneDetails: {
              types: {
                mobile: {
                  phoneNumber: '647-777'
                },
                home: {
                  phoneNumber: '647-999'
                }
              }
            }
          }

    beforeEach(() => {
      mutations = {
        updateMobilePhone: jest.fn()
      }
  
      store = new Vuex.Store({
        state: state,
        mutations
      });
    });
  
    it('mutates state mobile number', () => {
      const wrapper = shallowMount(PhoneMutateState, {
        store,
        localVue
      });
      
      mutations.updateMobilePhone(state, {phoneNumber: '999-000'})
      expect(mutations.updateMobilePhone.mock.calls).toHaveLength(1);
      expect(mutations.updateMobilePhone.mock.calls[0][1]).toEqual({phoneNumber: '999-000'});

      // console.log(store.state)
      // store.state.phoneDetails.types.mobile.phoneNumber
      console.log(store.state.phoneDetails.types.mobile.phoneNumber)
    });
});
