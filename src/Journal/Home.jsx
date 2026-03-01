import React from 'react';
import { Link } from 'react-router-dom';
import * as firebaseui from 'firebaseui' 
import firebase from 'firebase/compat/app'
import { useEffect } from 'react';
import 'firebaseui/dist/firebaseui.css'
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate()
    useEffect (() => {
        const ui  = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
        console.log(ui)
        ui.start('#firebaseui-auth-container', {
        signInOptions: [
            // List of OAuth providers supported.
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
         signInFlow: 'popup',
         callbacks: {
            signInSuccessWithAuthResult: (authResult, rediredtUrl) => {
                console.log("Login Successful!")
                //Manually navigate to your desired rooute
                navigate('/journal');
                
                // Return false so Fribase doesn't try its own return
                return false;
            },
         },
        // Other config options...
        });

    },[])
    
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <h1 className="text-6xl font-black text-gray-900 mb-4 tracking-tighter">
                Home
            </h1>
            <div id='firebaseui-auth-container'></div>
        </div>
    );
}