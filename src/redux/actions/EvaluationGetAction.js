import firestore from '@react-native-firebase/firestore';

export const getEvaluation = () => (dispatch) => {
   
     try {
         firestore()
            .collection('evaluation')
            .get()
            .then(querySnapshot => {
                var history = querySnapshot._docs.filter((index,i)=>{
                    return index._data.responses
                  })
                  var active = querySnapshot._docs.filter((index,i)=>{
                    return !index._data.responses
                  })
                 
               
          
                dispatch({ type: "GETEVALUATION", payload: { data: querySnapshot._docs,active:active,history:history} })
            });

       
    } catch (error) {
        console.log("erroe")
    }

}
