const intialState = {
    faq: [],
};
const policyReducer = (state = intialState, action) => {
    const payload = action.payload
   
    switch (action.type) {
        case 'GETFAQ': {
            return {
                ...state,
                faq: payload.data,
               
            }
        }
      default:
return state
      }
      
  }

export default policyReducer;