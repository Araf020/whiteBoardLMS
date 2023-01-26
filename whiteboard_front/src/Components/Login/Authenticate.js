// implement a function to check if the user is already logged in
import React, { useState, useEffect } from 'react';

const useAuth = () => {
    const token = localStorage.getItem('token');
        const expirationDate = localStorage.getItem('expirationDate');
        // console.log("token");
        // console.log(token);
        // console.log("expirationDate");
        // console.log(expirationDate);
        const now = new Date();
        if (now >= expirationDate) {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationDate');
        }

        if (token) {
                return true;
        } else {
            return false;
        }
    }

export default useAuth;