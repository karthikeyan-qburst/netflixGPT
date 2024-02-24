import React, { useEffect } from 'react'
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../redux/userSlice';
import { LOGO } from '../utils/constants';
import { toggleGPTSearch } from '../redux/gptSlice';


const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                navigate("/browse");
                // ...
            } else {
                dispatch(removeUser())
                navigate("/");

                // User is signed out
                // ...
            }

        });
        return () => unSubscribe();

    }, [])

    const handleSignout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            // dispatch(removeUser());
            // navigate("/");
        }).catch((error) => {
            // An error happened.
        });
    }

    const handleGPTClick = () => {
        dispatch(toggleGPTSearch());
    }
    return (
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-20 w-full flex justify-between'>
            <img className='w-44' src={LOGO} alt='LOGO' />
            {user &&
                <div>
                    <button className='py-2 px-4 mr-2 bg-purple-700 rounded-lg text-white' onClick={handleGPTClick}>GPT search</button>
                    <button className='text-white' onClick={handleSignout}>Signout</button>
                </div>}
        </div>

    )
}

export default Header
