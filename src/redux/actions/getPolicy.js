import firestore from '@react-native-firebase/firestore';

export const getPolicy = () => (dispatch) => {
    
     try {
         firestore()
            .collection('faq')
            .get()
            .then(querySnapshot => {
                dispatch({ type: "GETFAQ", payload: { data: querySnapshot._docs} })
            });

       
    } catch (error) {
        console.log("erroe")
    }

}
