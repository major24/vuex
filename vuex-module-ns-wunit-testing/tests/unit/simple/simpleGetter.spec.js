import { shallowMount, createLocalVue } from '@vue/test-utils'
import GetterSimpleState from '@/components/GetterSimpleState.vue'

import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

// INJECT STATE, TO ENABLE COMPONENT...

describe('GetterSimpleState.vue', () => {
    describe('with store getters', () => {
        let store
        let getters

        beforeEach(() => {
            getters = {
                getter_value_1: () => {
                    return 'my value 1';
                  },
                  getter_value_2: () => {
                    return 'my value 2';
                  }
            }
            store = new Vuex.Store({ getters })
        });

        it('renders getter component', () => {
            const wrapper = shallowMount(GetterSimpleState, {
                store,
                localVue
            });
    
            expect(wrapper).toBeDefined();
            // console.log(wrapper.html())
            expect(wrapper.find('.map-getter-1').text().trim()).toEqual('my value 1')
            expect(wrapper.find('.map-getter-2').text().trim()).toEqual('my value 2')
        });
    });

});

