const intialState = {
    survey: [],
    surveyExpire:[],
    surveyactive:[],
  };
  const surveyReducer = (state = intialState, action) => {
      const payload = action.payload
      console.log(payload)
      switch (action.type) {
       
          case 'GETSURVEY': {
              return {
                  ...state,
                  survey:payload.data,
                  surveyactive:payload.active,
                  surveyExpire:payload.expire
                }
          }
      default:
          return state
      }
      
  }
  
  export default surveyReducer;