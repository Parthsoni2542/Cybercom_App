import { combineReducers } from 'redux';
import authReducers from './reducers/authReducers';
import surveyReducer from './reducers/surveyReducer';
import EvaluationReducer from './reducers/EvaluationReducer';
import policyReducer from './reducers/policyReducer'
export default combineReducers({
    authReducers,    
    surveyReducer,
    EvaluationReducer,
    policyReducer
});