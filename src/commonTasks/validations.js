/*
*Common Tasks carried all over the project
*/

import React from 'react';
import Activities from './activities';

export default class Validations extends React.Component {
    static verifyEmail = email => {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email && email.match(mailformat)) {
            return true;
        }
        else {
            Activities.displayToast('Invalid email!')
            return false;
        }
    }

    static verifyPhone = phoneNo => {
        var phoneNoFormat = /^\d{10}$/;
        if (phoneNo.match(phoneNoFormat)) {
            return true;
        } else {
            return false;
        }
    }
    static verifyRequired = text => {
        if (text && text.trim().length > 0) {
            return true
        } else {
            return false
        }
    }
    static verifyPass = str => {
        if (!str || str.length < 8) {
            Activities.displayToast('Please provide a password of at least 8 characters!')
            return false;
        } else if (str.length > 20) {
            Activities.displayToast('Please provide a password of of maximum 20 characters!')
            return false;
        } else if (str.search(/\d/) == -1) {
            Activities.displayToast('Password must contain at least one number!')
            return false;
        } else if (str.search(/[a-zA-Z]/) == -1) {
            Activities.displayToast('Password must contain at least one alphabet!')
            return false;
        } else if (str.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:]/) != -1) {
            Activities.displayToast('Password must not contain any special character!')
            return false;
        }else{
            return true;
        }
        
    }
   
   
}

