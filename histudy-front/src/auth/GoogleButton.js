// GoogleButton.js

import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import React from 'react';


// const clientId = "425799046707-34ek2gt3b287jdl3knk9ib796l998trt.apps.googleusercontent.com";

export default function GoogleButton(){
    
    // const { loginWithCredential } = useAuthContext();
    const onSuccess = async(credentialResponse) => {
        console.log(jwtDecode(credentialResponse.credential));      
    };

    const onFailure = (error) => {
        console.log(error);
    }

    return(
                <GoogleOAuthProvider clientId="425799046707-34ek2gt3b287jdl3knk9ib796l998trt.apps.googleusercontent.com">
                    <GoogleLogin 
                        onSuccess={credentialResponse => onSuccess(credentialResponse)}
                        onFailure={onFailure}
                        useOneTap
                        
                    />
                </GoogleOAuthProvider>
                    
                
    
    )
}