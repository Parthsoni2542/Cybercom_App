import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useContext, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LoginComponent from '../../components/LoginComponent';
import { loginUser } from '../../redux/actions/authActions';


import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';


const admin = "http://192.168.0.204:3001/users/verifyUsers";


const LoginScreen = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [otpbox, setOtpbox] = useState(false)
  const [counter, setCounter] = useState(120);
  const { navigate } = useNavigation();
  const { params } = useRoute();
  const dispatch = useDispatch();
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');

  const [confirmation, setconfirmation] = useState('');

  const signInWithPhoneNumber = async (phoneNumber) => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setconfirmation(confirmation)
      if (confirmation) {
        setOtpbox(true)
        setErrors(prev => {
          return { ...prev, mobileno: 'OTP has been sent your mobileno.' };
        });

      } else {
        setErrors(prev => {
          return { ...prev, mobileno: 'failed' };
        });
      }
    } catch (error) {
      setErrors(prev => {
        return { ...prev, mobileno: 'your number is blocked' };
      });
    }


  }



  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });

    if (value !== '') {
      setErrors(prev => {
        return { ...prev, [name]: null };
      });
    } else {
      setErrors(prev => {
        return { ...prev, [name]: 'This field is required' };
      });
    }
  };

  const createTwoButtonAlert = (error) =>
    Alert.alert(
      "Error",
      "Internal Server Error",
      [
  
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

  const checkCart = async (number) => {
    await fetch(
      `${admin}`, {
      "method": "POST",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
      body: JSON.stringify({
        "mobile_number": number,
      })
    }
    ).then(response => {return response.json() })
      .then(responseJSON => {
        console.log("responseJSON",responseJSON)
        if (responseJSON.isValid == true) {
          const numbers = `+91${number}`
          signInWithPhoneNumber(numbers)
        } else {
          setErrors(prev => {
            return { ...prev, mobileno: 'mobileno not Register' };
          });
        }


      }).catch( error => createTwoButtonAlert(error))
  }


  const onSendSubmit = () => {
    if (!form.mobileno) {
      setErrors(prev => {
        return { ...prev, mobileno: 'Please enter phone number.' };
      });
      setOtpbox(false)
    } else if (form.mobileno) {
      checkCart(form.mobileno)

    }

  };

  const onVerifySubmit = async () => {
    const conform = confirmation;
    const otp = form.otp;
    if (!form.otp) {
      setErrors(prev => {
        return { ...prev, otp: 'Please enter OTP.' };
      });
      // setOtpbox(false)
    } else {
      try {
        const result = await conform.confirm(otp)
        console.log("result", result)
        dispatch(loginUser(result.user.uid))
      } catch (error) {
        setErrors(prev => {
          return { ...prev, otp: 'Invalid OTP.' };
        });
      }



    }
  }




  return (
    <LoginComponent
      onChange={onChange}
      onSendSubmit={onSendSubmit}
      onVerifySubmit={onVerifySubmit}
      form={form}
      errors={errors}
      otpbox={otpbox}
      counter={counter}
    />
  );
};

export default LoginScreen;
