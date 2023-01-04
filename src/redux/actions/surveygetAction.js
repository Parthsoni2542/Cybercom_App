import firestore from '@react-native-firebase/firestore';

export const getsurvey = () => (dispatch) => {
    console.log("called")
    try {
        firestore()
            .collection('survey')
            .get()
            .then(querySnapshot => {
                var today = new Date();
                var dd = String(today.getDate()).padStart(2, '0');
                var mm = String(today.getMonth() + 1).padStart(2, '0');
                var yyyy = today.getFullYear();
                today = yyyy + "-" + mm + "-" + dd;
                var active = querySnapshot._docs.filter((index,i)=>{
                  return index._data.dates.end >= today 
                })
                var expire = querySnapshot._docs.filter((index,i)=>{
                    console.log("index",index._data.dates.end < today)
                    console.log("today",today)
                    return index._data.dates.end < today
                  })
                console.log("active",active)
                console.log("expire",expire)
                dispatch({ type: "GETSURVEY", payload: { data: querySnapshot._docs,active:active,expire:expire } })
            });


    } catch (error) {
        console.log("erroe")
    }

}
