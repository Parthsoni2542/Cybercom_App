const intialState = {
    Evalution: [],
    Evalutionhistory: [],
    Evalutionactive:[]
};
const EvaluationReducer = (state = intialState, action) => {
    const payload = action.payload
   
    switch (action.type) {
        case 'GETEVALUATION': {
            return {
                ...state,
                Evalution: payload.data,
                Evalutionhistory:payload.history,
                Evalutionactive:payload.active
            }
        }
        case 'GETEVALUATIONHISTORY': {
            return {
                ...state,
                Evalutionhistory:payload.data,
            }
        }
      default:
return state
      }
      
  }

export default EvaluationReducer;