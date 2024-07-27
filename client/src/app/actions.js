export const UPDATE_STEP = 'UPDATE_STEP';
export const UPDATE_FORM = 'UPDATE_FORM';

export const updateStep = (step, value) => ({
  type: UPDATE_STEP,
  payload: { step, value },
});


export const updateForm = (field, value) => ({
  type: UPDATE_FORM,
  payload: { field, value },
});