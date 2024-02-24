import React, { useState } from 'react'
import Header from './Header'
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { BG_IMAGE } from '../utils/constants';

const Login = () => {
    const validationSchema = Yup.object({
        name: Yup.string(),
        email: Yup.string().email().required("Required"),
        password: Yup.string().min(8, 'Password must be 8 characters long')
            .matches(/[0-9]/, 'Password requires a number')
            .matches(/[a-z]/, 'Password requires a lowercase letter')
            .matches(/[A-Z]/, 'Password requires an uppercase letter')
            .matches(/[^\w]/, 'Password requires a symbol'),
    });
    const initialValues = {
        email: "",
        password: ""
    }
    // const formik = useFormik({
    //     initialValues: {
    //         email: "test",
    //         password: ""
    //     },
    //     handleSubmit:(v)=>console.log(v),
    //     validationSchema
    // });
    const [isSignInForm, setSignInForm] = useState(true);
    const navigate = useNavigate();
    const toggleSigninForm = () => {
        setSignInForm(!isSignInForm);
    }
    const handleSubmit = (e) => {
        if (!isSignInForm) {

            createUserWithEmailAndPassword(auth, e.email, e.password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: e.name,
                    }).then(() => {
                        // Profile updated!

                        // ...
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });
        } else {
            signInWithEmailAndPassword(auth, e.email, e.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        }
    }
    return (
        <div>
            <Header />
            <div className='absolute h-full w-full'>
                <img className='h-full w-full overflow-clip' src={BG_IMAGE} alt="background-banner" />
            </div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                <Form className='absolute w-full sm:w-3/12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black mx-auto p-8 text-white bg-opacity-65'>
                    <h1 className=' m-2 font-bold text-3xl'> {isSignInForm ? "Sign In" : "Sign Up"}</h1>
                    {!isSignInForm && <Field type="text" name="name" placeholder='User name' className='p-2 m-2 w-full bg-gray-700 rounded-lg' />}
                    <Field type="text" name="email" placeholder='Email Address' className='p-2 m-2 w-full bg-gray-700 rounded-lg' />
                    <ErrorMessage name="email" />
                    <Field type="password" name="password" placeholder='Password' className='p-2 m-2 w-full bg-gray-700 rounded-lg' />
                    <ErrorMessage name="password" />
                    <button type='submit' className='p-2 m-2 w-full bg-red-700 rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                    <p className='cursor-pointer m-2' onClick={toggleSigninForm}>{isSignInForm ? "New to Netflix? Sign up now" : "Already a member? login now"}</p>
                </Form>
            </Formik>
        </div>
    )
}

export default Login
