import {createModel} from '@rematch/core';
import {RootModel} from './models';
import axios from 'axios';

export const farmers = createModel<RootModel>()({
  state: {
    loading: false,
    farmerList: [],
    error: '',
  },
  reducers: {
    makeFarmerRequest(state) {
      return {
        ...state,
        loading: true,
      };
    },
    receiveFarmerResponseSuccessfully(state, payload) {
      return {
        ...state,
        loading: false,
        farmerList: payload,
        error: '',
      };
    },
    requestFailure(state, payload) {
      return {
        ...state,
        loading: false,
        farmerList: [],
        error: payload,
      };
    },
  },
  effects: (dispatch) => ({
    async requestFarmerList() {
      dispatch.farmers.makeFarmerRequest();
      await axios
        .get('https://fakeapi20201120181506.azurewebsites.net/farmers')
        .then(({data}) =>
          dispatch.farmers.receiveFarmerResponseSuccessfully(data),
        )
        .catch((error) => dispatch.farmers.requestFailure(error));
    },
  }),
});
