/**
 *  @flow
 */

import RemokuService from "../services/Remoku.service";

export type ButtonFlowType = {
    name: string,
    image: number, // for some reason this is number?
    onPress: Function
};

const Power: ButtonFlowType = {
    name: 'POWER',
    image: require('../assets/power.png'),
    onPress: RemokuService.togglePower
};

const Left: ButtonFlowType = {
    name: 'LEFT',
    image: require('../assets/left.png'),
    onPress: () => RemokuService.keyPress('Left')
};

const Up: ButtonFlowType = {
    name: 'UP',
    image: require('../assets/up.png'),
    onPress: () => RemokuService.keyPress('Up')
};

const Right: ButtonFlowType = {
    name: 'RIGHT',
    image: require('../assets/right.png'),
    onPress: () => RemokuService.keyPress('Right')
};

const Down: ButtonFlowType = {
    name: 'DOWN',
    image: require('../assets/down.png'),
    onPress: () => RemokuService.keyPress('Down')
};

const Select: ButtonFlowType = {
    name: 'SELECT',
    image: require('../assets/select.png'),
    onPress: () => RemokuService.keyPress('Select')
};

const VolumeUp: ButtonFlowType = {
    name: 'VOLUME_UP',
    image: require('../assets/volumeUp.png'),
    onPress: () => RemokuService.keyPress('VolumeUp')
};

const VolumeDown: ButtonFlowType = {
    name: 'VOLUME_DOWN',
    image: require('../assets/volumeDown.png'),
    onPress: () => RemokuService.keyPress('VolumeDown')
};

const Mute: ButtonFlowType = {
    name: 'MUTE',
    image: require('../assets/mute.png'),
    onPress: () => RemokuService.keyPress('VolumeMute')
};

const Home: ButtonFlowType = {
    name: 'HOME',
    image: require('../assets/home.png'),
    onPress: () => RemokuService.keyPress('Home')
};

const Input: ButtonFlowType = {
    name: 'INPUT',
    image: require('../assets/input.png'),
    onPress: () => RemokuService.keyPress('InputHDMI1')
};

const Back: ButtonFlowType = {
    name: 'BACK',
    image: require('../assets/left.png'),
    onPress: () => RemokuService.keyPress('Back')
};

export default {
    Power,
    Left,
    Up,
    Right,
    Down,
    Select,
    VolumeUp,
    VolumeDown,
    Mute,
    Home,
    Input,
    Back
};
