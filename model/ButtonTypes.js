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
    image: require('../assets/switch.png'),
    onPress: RemokuService.togglePower
};

export default {
    Power
};
