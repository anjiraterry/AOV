// reducers.js
import { combineReducers } from 'redux';
import { cryptoApi } from '../services/cryptoApi';
import { cryptoNewsApi } from '../services/cryptoNewsApi';
import { UPDATE_STEP, UPDATE_FORM } from './actions';

const initialStepsState = {
  step1: '',
  step2: '',
  step3: '',
  step4: '',
  stepid: 0,
  steppercentage: '0% , Please complete your KYC',
};

const initialFormState = {
  bank: '',
  accountNo: '',
  firstName: '',
  lastName: '',
  number: '',
  bvn: '',
  dob: '',
  gender: 1,
  country: '',
 location: '',
};

const stepReducer = (state = initialStepsState, action) => {
  switch (action.type) {
    case UPDATE_STEP:
      return {
        ...state,
        [action.payload.step]: action.payload.value,
      };
    default:
      return state;
  }
};

const formReducer = (state = initialFormState, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  kycsteps: stepReducer,
  kycform: formReducer,
  [cryptoApi.reducerPath]: cryptoApi.reducer,
  [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
});

export default rootReducer;
