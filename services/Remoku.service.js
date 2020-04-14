import axios from "axios";

const instance = axios.create({
    baseURL: 'http://192.168.0.17:8060',
    timeout: 5000
});

const getApps = async () => {
    try {
        const response = await instance.get('/query/apps');
    } catch(error) {
        console.log(`Error getting apps: ${error.message}`);
    }
};

let isOn = false;
const togglePower = async () => {
    if (isOn) {
        isOn = false;
        try {
            const response = await instance.post(`/keypress/PowerOff`);
        } catch(error) {
            console.log(`Error sending poweroff: ${error.message}`);
            if (error.message === 'timeout of 5000ms exceeded') {
                const response = await instance.post(`/keypress/PowerOn`);
            }
        }
    } else {
        isOn = true;
        try {
            const response = await instance.post(`/keypress/PowerOn`);
        } catch(error) {
            console.log(`Error sending poweron: ${error.message}`);
            if (error.message === 'timeout of 5000ms exceeded') {
                const response = await instance.post(`/keypress/PowerOff`);
            }
        }
    }
};

const keyPress = async (key) => {
    try {
        const response = await instance.post(`/keypress/${key}`);
    } catch(error) {
        console.log(`Error sending keypress: ${error.message}`);
    }
};

export default {
    getApps,
    keyPress,
    togglePower
}
