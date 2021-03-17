const initialState = {
  model:[],
}

export default function nasa (state = initialState, { type, payload }) {
  switch (type) {
    case 'GET_NASA_SUCCESS':
      return {
        ...state,
        model:[...state.model,payload],
      };
    case 'GET_NASA_ERROR':
      return {
        ...state,
        model:[...state.model]
      }
    default:
      return state;
  }
};
