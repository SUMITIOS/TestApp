import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Validations from '../commonTasks/validations';
import { FloatingTitleTextInputField } from '../components/FloatingInput';
import LoginBtn from '../components/loginBtn';
import colors from '../constants/Colors';
import Dimension from '../constants/Dimension';
import Strings from '../constants/Strings';
import moviesAction from '../reduxFiles/actions/moviesAction';


export default Login = props => {
    const dispatch = useDispatch();
    const { email, password } = useSelector(state => state.movies);
    const goToDashboard = () => {
        if (Validations.verifyEmail(email) && Validations.verifyPass(password)) {
            props.navigation.navigate('Dashboard')
        }
    }
    const goToOtherScreen = () => {
        props.navigation.navigate('MoviesList')
    }

    return (
        <>
            <StatusBar backgroundColor={colors.colorPurple} />
            <View style={styles.mainContainer}>
                <View style={{ marginTop: 50 }}>
                    <FloatingTitleTextInputField
                        attrName='email'
                        title={Strings.emailPlaceHolder}
                        value={email}
                        updateMasterState={(attrName, value) => dispatch(moviesAction.updateMasterState(attrName, value))}
                    />
                </View>
                <View style={{ marginTop: 50 }}>
                    <FloatingTitleTextInputField
                        attrName='password'
                        title={Strings.passwordPlaceholder}
                        value={password}
                        updateMasterState={(attrName, value) => dispatch(moviesAction.updateMasterState(attrName, value))}
                    />
                </View>

                <LoginBtn
                    onPress={goToDashboard}
                    text={Strings.loginBtnLabel}
                />
                <Text style={{ margin: 20 }}>Or</Text>
                <LoginBtn
                    onPress={goToOtherScreen}
                    text={Strings.otherBtnLabel}
                />
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.colorBackgroundBlue,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    headingsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Dimension._width100per - 40,
        marginBottom: 10
    },
})