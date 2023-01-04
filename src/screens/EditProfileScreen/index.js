import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import React, {useContext, useEffect, useState} from 'react';
import EditProfileComponent from '../../components/EditProfileComponent';


const EditProfileScreen = () => {
  const [imageSource, setImageSource] = useState(null);



  const setImageSrc = source => {
    setImageSource(source);
    setForm({
      ...form,
      profile: source?.uri?.replace('data:image/jpeg;base64,', '') ?? ' ',
    });
  };

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      setErrors(prev => {
        return {...prev, [name]: null};
      });
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };

  const onSubmit = () => {
    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'Please enter a first name'};
      });
    } else if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Please enter a last name'};
      });
    } else if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please enter a email address'};
      });
    } else if (!form.phoneNo) {
      setErrors(prev => {
        return {...prev, phoneNo: 'Please enter a phone number'};
      });
    } else if (
      Object.values(form).length === 5 &&
      Object.values(errors).every(item => !item)
    ) {
      // updateProfile(form)(loaderDispatch, bottomMessageDispatch);
    }
  };

  return (
    <EditProfileComponent
      onChange={onChange}
      onSubmit={onSubmit}
      form={form}
      imageSource={imageSource}
      setImageSource={setImageSrc}
      errors={errors}
    />
  );
};

export default EditProfileScreen;
