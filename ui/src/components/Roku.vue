<template>
  <v-container fluid>
        <v-card
            class="mx-auto"
            max-width="500"
            align="center"
            justify="center"
        >
            <v-banner
                single-line
                :color="isConnected ? 'green' : 'red'"
                >
                    {{isConnected ? "Connected" : "Not Connected"}}
            </v-banner>
            <v-select
                :items="devices"
                label="Devices"
                solo
                @change="deviceSelected"
            ></v-select>
            <v-row
                align="center"
                justify="center"
                class="ma-4"
            >
                <v-btn dark large color="red" @click="powerButtonPressed">
                    <v-icon dark>fa-power-off</v-icon>
                </v-btn>        
            </v-row>
            <v-row
                align="center"
                justify="center"
                class="ma-4"
            >
                <v-btn dark large color="grey lighten-1" class="ml-2 mr-2" @click="backButtonPressed">
                    <v-icon dark>fa-long-arrow-alt-left</v-icon>
                </v-btn>
                <v-btn dark large color="grey lighten-1" class="ml-2 mr-2" @click="searchButtonPressed">
                    <v-icon dark>fa-search</v-icon>
                </v-btn>                
                <v-btn dark large color="grey lighten-1" class="ml-2 mr-2" @click="optionsButtonPressed">
                    <v-icon dark>fa-asterisk</v-icon>
                </v-btn>        
            </v-row>
            <v-row
                align="center"
                justify="center"
                class="ma-4"
            >
                <v-btn dark large color="grey lighten-1" class="ml-2 mr-2" @click="homeButtonPressed">
                    <v-icon dark>fa-home</v-icon>
                </v-btn>
                <v-btn dark large color="deep-purple accent-2" class="ml-2 mr-2" @click="upButtonPressed">
                    <v-icon dark>fa-arrow-up</v-icon>
                </v-btn>                
                <v-btn dark large color="grey lighten-1" class="ml-2 mr-2" @click="inputButtonPressed">
                    <v-icon dark>fa-random</v-icon>
                </v-btn>        
            </v-row>
            <v-row
                align="center"
                justify="center"
                class="ma-4"
            >
                <v-btn dark large color="deep-purple accent-2" class="ml-2 mr-2" @click="leftButtonPressed">
                    <v-icon dark>fa-arrow-left</v-icon>
                </v-btn>
                <v-btn dark large color="deep-purple accent-2" class="ml-2 mr-2" @click="selectButtonPressed">
                    <v-icon dark>fa-circle</v-icon>
                </v-btn>                
                <v-btn dark large color="deep-purple accent-2" class="ml-2 mr-2" @click="rightButtonPressed">
                    <v-icon dark>fa-arrow-right</v-icon>
                </v-btn>        
            </v-row>
            <v-row
                align="center"
                justify="center"
                class="ma-4"
            >
                <v-btn dark large color="grey lighten-1" class="ml-2 mr-2" @click="volumeDownButtonPressed">
                    <v-icon dark>fa-volume-down</v-icon>
                </v-btn>
                <v-btn dark large color="deep-purple accent-2" class="ml-2 mr-2" @click="downButtonPressed">
                    <v-icon dark>fa-arrow-down</v-icon>
                </v-btn>                
                <v-btn dark large color="grey lighten-1" class="ml-2 mr-2" @click="volumeUpButtonPressed">
                    <v-icon dark>fa-volume-up</v-icon>
                </v-btn>        
            </v-row>
            <v-row
                align="center"
                justify="center"
                class="ma-4"
            >
                <v-btn dark large color="grey lighten-1" class="ml-2 mr-2 mb-12" @click="muteButtonPressed">
                    <v-icon dark>fa-volume-off</v-icon>
                </v-btn>        
            </v-row>
        </v-card>
  </v-container>
</template>

<script>
    import axios from "axios";
    const instance = axios.create({
        baseURL: 'http://localhost:5000/api/',
        timeout: 12000
    });
    let address;
    export default {
        name: 'Roku',
        data: () => ({
            isConnected: false,
            devices: [],
            power: false
        }),
        methods: {
            deviceSelected(selectedDevice) {
                address = selectedDevice;
                this.isConnected = true;
            },
            async powerButtonPressed() {
                try {
                    this.power = !this.power;
                    await instance.post("keypress", {
                        address,
                        keypress: this.power ? "PowerOn" : "PowerOff"
                    });
                } catch (error) {
                    console.log("Could not send keypress");
                    console.error(error);
                }    
            },
            async backButtonPressed() {

            },
            async searchButtonPressed() {
                try {
                    const searchResponse = await instance.get("search");
                    for (let device of searchResponse.data) {
                        this.devices.push(device.location);
                    }            
                } catch (error) {
                    console.log("Could not find Roku TV");
                    console.error(error);
                }
            },
            async optionsButtonPressed() {

            },
            async homeButtonPressed() {

            },
            async upButtonPressed() {

            },
            async inputButtonPressed() {

            },
            async leftButtonPressed() {

            },
            async selectButtonPressed() {

            },
            async rightButtonPressed() {

            },
            async volumeDownButtonPressed() {

            },
            async downButtonPressed() {

            },
            async volumeUpButtonPressed() {

            },
            async muteButtonPressed() {

            }
        }
    }
</script>
