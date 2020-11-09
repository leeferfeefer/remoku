import axios from "axios";
var Client = require('react-native-ssdp').Client, client = new Client();
global.Buffer = global.Buffer || require('buffer').Buffer;
import AsyncStorageService from './AsyncStorage.service';

const instance = axios.create({
    timeout: 5000
});

let baseURL = '';

const setBaseURL = (newBaseURL) => {
    baseURL = newBaseURL;
}

const getApps = async () => {
    try {
        const response = await instance.get(`${baseURL}/query/apps`);
        return true;
    } catch(error) {
        console.log(`Error getting apps: ${error.message}`);
        return false;
    }
};

let isOn = false;
const togglePower = async () => {
    if (isOn) {
        isOn = false;
        try {
            const response = await instance.post(`${baseURL}/keypress/PowerOff`);
            return true;
        } catch(error) {
            console.log(`Error sending poweroff: ${error.message}`);
            try {
                const response = await instance.post(`${baseURL}/keypress/PowerOn`);
                return true;
            } catch (error) {
                return false;
            }   
        }
    } else {
        isOn = true;
        try {
            const response = await instance.post(`${baseURL}/keypress/PowerOn`);
            return true;
        } catch(error) {
            console.log(`Error sending poweron: ${error.message}`);
            try {
                const response = await instance.post(`${baseURL}/keypress/PowerOff`);
                return true;
            } catch (error) {
                return false;
            }
        }
    }
};

const keyPress = async (key) => {
    try {
        const response = await instance.post(`${baseURL}/keypress/${key}`);
        return true;
    } catch(error) {    
        console.log(`Error sending keypress: ${error.message}`);
        return false;
    }
};

const search = () => {
    const promise = new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            resolve(false);
        }, 20000);
        client.search('roku:ecp');
        client.on('response', async function (headers, statusCode, rinfo) {
            if (!!headers.ST && !!headers.LOCATION && !!headers['DEVICE-GROUP.ROKU.COM']) {
                if (headers.ST === 'roku:ecp') {
                    baseURL = headers.LOCATION;
                    console.log("baseURL", baseURL);
                    const tvIDs = await AsyncStorageService.getData('@tv_ids');        
                    if (!!!tvIDs) {
                        await AsyncStorageService.storeData([baseURL], '@tv_ids');
                    } else {
                        if (!tvIDs.some(id => id === baseURL)) {                            
                            await AsyncStorageService.storeData([...tvIDs, baseURL], '@tv_ids');
                        }
                    }                       
                    resolve(true);
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
    search, 
    setBaseURL
}
