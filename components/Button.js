/**
 *  @flow
 */

import React from 'react';
import {
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';
import type {ButtonFlowType} from '../model/ButtonTypes';

type Props = {
    buttonType: ButtonFlowType,
    setLoading: Function
};

const Button = (props: Props) => {
    const {buttonType, setLoading} = props;
    return (
        <TouchableOpacity style={styles.buttonStyle} onPress={async () => {
            setLoading(true);
            await buttonType.onPress();
            setLoading(false);
        }}>
            <Image
                source={buttonType.image}
                style={styles.buttonImageStyle}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        height: 60,
        width: 60
    },
    buttonImageStyle: {
        height: 60,
        width: 60
    }
});

export default Button;

