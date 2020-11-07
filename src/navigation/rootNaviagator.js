
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import colors from '../constants/Colors';
import Dimension from '../constants/Dimension';
import MoviesDetail from '../screens/MovieDetail';
import MoviesList from '../screens/MoviesList';
import Dashboard from '../screens/Dashboard';
import Login from '../screens/Login';

const Stack = createStackNavigator();

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: colors.colorPrimary,
    },
    headerTintColor: colors.colorWhite,
    headerTitle: '',
    cardStyle: { backgroundColor: colors.colorWhite },
    shifting: false
};

const MainNavigator = () => {

    return (
        <Stack.Navigator
            initialRouteName="Introduction"
            screenOptions={defaultStackNavOptions}
            animationEnabled={false}
        >
            <Stack.Screen
                name="Login"
                component={Login}
                animationEnabled={false}
                options={({ navigation, route }) => ({
                    header:()=>null,
                })}
            />
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={({ navigation, route }) => ({
                    headerTitle: (props) => <Text style={styles.headerTitle}>Dashboard</Text>,
                    headerStyle: styles.header,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTitleAlign:'center',
                    animationEnabled: false,
                })}
            />
            <Stack.Screen
                name="MoviesList"
                component={MoviesList}
                options={({ navigation, route }) => ({
                    headerTitle: (props) => <Text style={styles.headerTitle}>Home</Text>,
                    headerStyle: styles.header,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    animationEnabled: false,
                    headerTitleAlign:'center'
                })}
            />
            <Stack.Screen
                name="MoviesDetail"
                component={MoviesDetail}
                animationEnabled={false}
                options={({ navigation, route }) => ({
                    header:()=>null,
                })}
                mode={'modal'}
            />
        </Stack.Navigator>
    )
}
const app = () => {
    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    )
}
const styles = StyleSheet.create({
    headerTitle: {
        fontWeight: 'bold',
        fontSize: Dimension.extraLargeTxt,
        color: colors.colorWhite,
    },
    header: {
        backgroundColor: colors.colorPurple,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    },
})

export default app;
