import axios from "axios";

const instance = axios.create({
    baseURL: 'http://192.168.0.19:5000/api/',
    timeout: 12000
});

export default class RemokuService {

    static searchDevice = async () => {
        let searchResponse;
        try {
            searchResponse = await instance.get("search");        
            console.log("searchResponse", searchResponse)
        } catch (error) {
            console.log("Could not find Roku TV");
            console.error(error);
        }
        return searchResponse;
    };

    static keyPress = async (address, keypress) => {
        try {
            await instance.post("keypress", {
                address,
                keypress
            });
        } catch (error) {
            console.log("Could not send keypress");
            console.error(error);
        }
    };
}