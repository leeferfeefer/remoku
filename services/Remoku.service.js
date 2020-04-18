import axios from "axios";
var Client = require('react-native-ssdp').Client, client = new Client();
global.Buffer = global.Buffer || require('buffer').Buffer;

const instance = axios.create({
    timeout: 5000
});

let baseURL = '';

const getApps = async () => {
    try {
        const response = await instance.get(`${baseURL}/query/apps`);
    } catch(error) {
        console.log(`Error getting apps: ${error.message}`);
    }
};

let isOn = false;
const togglePower = async () => {
    if (isOn) {
        isOn = false;
        try {
            const response = await instance.post(`${baseURL}/keypress/PowerOff`);
        } catch(error) {
            console.log(`Error sending poweroff: ${error.message}`);
            try {
                const response = await instance.post(`${baseURL}/keypress/PowerOn`);
            } catch (error) {}
        }
    } else {
        isOn = true;
        try {
            const response = await instance.post(`${baseURL}/keypress/PowerOn`);
        } catch(error) {
            console.log(`Error sending poweron: ${error.message}`);
            try {
                const response = await instance.post(`${baseURL}/keypress/PowerOff`);
            } catch (error) {}
        }
    }
};

const keyPress = async (key) => {
    try {
        console.log("baseURL", baseURL);
        const response = await instance.post(`${baseURL}/keypress/${key}`);
    } catch(error) {
        console.log(`Error sending keypress: ${error.message}`);
    }
};

const search = () => {
    let found = false;
    const promise = new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            resolve("fail");
        }, 20000);
        client.search('roku:ecp');
        client.on('response', function (headers, statusCode, rinfo) {
            if (!!headers.ST && !!headers.LOCATION && !!headers['DEVICE-GROUP.ROKU.COM']) {
                if (headers.ST === 'roku:ecp') {
                    baseURL = headers.LOCATION;
                    found = true;
                    resolve("pass");
                    clearTimeout(timeout);
                }
            }
        });
    });
    return promise;
};




export default {
    getApps,
    keyPress,
    togglePower,
    search
}
