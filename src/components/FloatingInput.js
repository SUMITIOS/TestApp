
import { func, number, object, string } from 'prop-types';
import React, { Component } from 'react';
import { Animated, StyleSheet, Text, TextInput, View } from 'react-native';
import colors from '../constants/Colors';
import Dimension from '../constants/Dimension';


export class FloatingTitleTextInputField extends Component {
    static propTypes = {
        attrName: string.isRequired,
        title: string.isRequired,
        value: string.isRequired,
        updateMasterState: func.isRequired,
        keyboardType: string,
        titleActiveSize: number, // to control size of title when field is active
        titleInActiveSize: number, // to control size of title when field is inactive
        titleActiveColor: string, // to control color of title when field is active
        titleInactiveColor: string, // to control color of title when field is active
        textInputStyles: object,
        otherTextInputProps: object,
        onFocus: func,
        onBlur: func,
        onSubmitEditing: func,
        errText: string,
        error: false,
        editable: true
    }


    static defaultProps = {
        keyboardType: 'default',
        titleActiveSize: 11.5,
        titleInActiveSize: 15,
        titleActiveColor: 'black',
        titleInactiveColor: 'dimgrey',
        textInputStyles: {},
        otherTextInputAttributes: {},
    }

    constructor(props) {
        super(props);
        const { value } = this.props;
        this.position = new Animated.Value(value ? 1 : 0);
        this.state = {
            isFieldActive: false,
            touched: false,
        }
    }

    _handleFocus = () => {
        if (!this.state.isFieldActive) {
            this.setState({ isFieldActive: true, });
            Animated.timing(this.position, {
                toValue: 1,
                duration: 150,
                useNativeDriver: false,
            }).start();
        }
    }

    _handleBlur = () => {
        if (this.state.isFieldActive && !this.props.value) {
            this.setState({ isFieldActive: false, touched: true });
            Animated.timing(this.position, {
                toValue: 0,
                duration: 150,
                useNativeDriver: false,
            }).start();
        }
    }

    _onChangeText = (updatedValue) => {
        const { attrName, updateMasterState } = this.props;
        updateMasterState(attrName, updatedValue);
        this.setState({ touched: true })
    }

    _returnAnimatedTitleStyles = () => {
        const { isFieldActive } = this.state;
        const {
            titleActiveColor, titleInactiveColor, titleActiveSize, titleInActiveSize
        } = this.props;

        return {
            top: this.position.interpolate({
                inputRange: [0, 1],
                outputRange: [10, -10],
            }),
            fontSize: isFieldActive ? 11 : 15,
            color: isFieldActive ? colors.colorRed : colors.colorGray,
        }
    }

    render() {
        return (
            <View>
                <View style={[Styles.container, this.props.containerStyle, { borderColor: this.state.isFieldActive ? colors.colorRed : colors.colorGray }]}>
                  
                    <Animated.Text
                        style={[Styles.titleStyles, this.props.titleStyle, this._returnAnimatedTitleStyles()]}
                    >
                        {this.props.title}
                    </Animated.Text>
                    <TextInput
                        value={this.props.value}
                        style={[Styles.textInput, this.props.textInputStyles]}
                        underlineColorAndroid='transparent'
                        onFocus={this._handleFocus}
                        onBlur={this._handleBlur}
                        onChangeText={this._onChangeText}
                        autoCapitalize={'none'}
                        textAlign={'left'}
                        secureTextEntry={this.props.secureTextEntry}
                        onSubmitEditing={this.props.onSubmitEditing}
                        editable={this.props.editable || true}
                        keyboardType={this.props.keyboardType}
                        {...this.props.otherTextInputProps}
                    />
                    
                </View>
                {(this.props.error && this.state.touched) &&
                    <Text style={Styles.errTxt}>{this.props.errText}</Text>
                }
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        width: Dimension._width100per - 120,
        borderRadius: 3,
        borderBottomWidth: 0.5,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    textInput: {
        fontSize: Dimension.regularTxt,
        marginHorizontal: 15,
        color: colors.colorXDarkGray,
        width: Dimension._width100per - 100,
    },
    titleStyles: {
        position: 'absolute',
        left: 10,
    },
    errTxt: {
        color: colors.colorRedBrown,
        fontSize: Dimension.smallTxt,
        marginLeft: 20
    }
})
