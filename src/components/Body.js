import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import Browse from './Browse'
import Login from './Login'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/userSlice';

const Body = () => {
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        { path: '/', element: <Login /> },
        { path: '/browse', element: <Browse /> }
    ])
    return (
        <div>
            <RouterProvider router={appRouter}>
                Body
            </RouterProvider>
        </div>
    )
}

export default Body
