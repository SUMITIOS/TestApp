
import React from 'react';
import Toast from 'react-native-root-toast';
import colors from '../constants/Colors';
import Dimension from '../constants/Dimension';


export default class Activities extends React.Component {
    static displayToast(message) {
        Toast.show(message, {
            duration: Toast.durations.SHORT,
            position: 140,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
            onShow: () => {

            },
            onShown: () => {

            },
            onHide: () => {

            },
            onHidden: () => {

            }
        });
    }

    static displayToastError(message) {
        Toast.show(message, {
            duration: Toast.durations.LONG,
            position: 50,
            shadow: false,
            animation: true,
            hideOnPress: true,
            delay: 0,
            backgroundColor: colors.colorRedBrown,
            textColor: colors.colorWhite,
            containerStyle: {
                padding: 10,
                width: Dimension._width100per,
                minHeight: 60,
                borderRadius: 0,
                justifyContent: 'center',
                alignItems: "center",
            },

            onShow: () => {
            },
            onShown: () => {
            },
            onHide: () => {
            },
            onHidden: () => {
            }
        })
    }


    static _displayToastSearch(message) {
        Toast.show(message, {
            duration: Toast.durations.SHORT,
            position: -50,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
            backgroundColor: "#C1821C",
            textColor: "#ffff",
            containerStyle: {
                padding: 10,
                width: Dimension._width100per,
                minHeight: 60,
                borderRadius: 0,
                justifyContent: 'center',
                alignItems: "center",
                elevation: 5
            },
            onShow: () => {

            },
            onShown: () => {

            },
            onHide: () => {

            },
            onHidden: () => {

            }
        });
    }

    static displayToastSuccess(message) {
        Toast.show(message, {
            duration: Toast.durations.LONG,
            position: 50,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
            backgroundColor: colors.colorGreen,
            textColor: colors.colorWhite,
            containerStyle: {
                padding: 10,
                width: Dimension._width100per,
                minHeight: 60,
                borderRadius: 0,
                justifyContent: 'center',
                alignItems: "center",
            },

            onShow: () => {

            },
            onShown: () => {

            },
            onHide: () => {

            },
            onHidden: () => {

            }
        });
    }




    static convertTime = (time24) => {
        var hours = time24.split(":")[0]; // gives the value in 24 hours format
        var AmOrPm = hours >= 12 ? 'pm' : 'am';
        hours = (hours % 12) || 12;
        var minutes = time24.split(":")[1];
        var finalTime = hours + ":" + minutes + AmOrPm;
        return finalTime;

    }

    static toTitleCase = str => {
        if (str) {
            return str.replace(/\w\S*/g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        } else {
            return ''
        }
    }
    static toSentenceCase = (str) => {
        if (str) {
            return str[0].toUpperCase() + str.substr(1, str.length)
        } else {
            return ''
        }
    }

    static debugFailureError(e, api) {
        console.warn(e, '😔 api hook failed',api);
        this.displayToastError('Something went wrong!')
    }

    static debugTimeoutErr(e, api) {
        console.warn(e, '⏰ api hook timed out',api);
        this.displayToastError('Request time out!')
    }
    static debugOnLoadSuccess(unparsedResponse, formData = {}) {
        // do make function to do "one" thing
        // dont pass boolean value as an argument
        // Avoid switch statements and use polymorphism instead
        // Independently deploy GUI from budiness logic
        // Garbage collection, dont write Side Effects functions
        console.log('api hook succeded with following unparsed response:', unparsedResponse);
        console.log('api hook succeded with following formData:', JSON.stringify(formData));
    }
    static catchApiCallError(e) {
        this.displayToast(e.message);
        console.log('api hook promise was caught following error:', e);
        console.warn('api hook promise was caught following error:', e);
    }


}

