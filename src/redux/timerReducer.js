import { Type } from "./timerActions";

const initialState = {
  value: 0,
  step: {
    value: 5,
    label: "5",
  },
};

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.INCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };

    case Type.DECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };

    case Type.CHANGE_STEP:
      return {
        ...state,
        step: action.payload,
      };

    default:
      return state;
  }
};

export default timerReducer;
