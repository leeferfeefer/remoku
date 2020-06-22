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
    import RemokuService from "../service/remoku.service"

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
                this.power = !this.power;
                await RemokuService.keyPress(address, this.power ? "PowerOn" : "PowerOff");
            },
            async backButtonPressed() {
                await RemokuService.keyPress(address, "Back");
            },
            async searchButtonPressed() {
                const searchResponse = await RemokuService.searchDevice();
                for (let device of searchResponse.data) {
                    this.devices.push(device.location);
                }    
            },
            async optionsButtonPressed() {
                await RemokuService.keyPress(address, "Info");
            },
            async homeButtonPressed() {
                await RemokuService.keyPress(address, "Home");
            },
            async upButtonPressed() {
                await RemokuService.keyPress(address, "Up");
            },
            async inputButtonPressed() {
                await RemokuService.keyPress(address, "InputHDMI1");
            },
            async leftButtonPressed() {
                await RemokuService.keyPress(address, "Left");
            },
            async selectButtonPressed() {
                await RemokuService.keyPress(address, "Select");
            },
            async rightButtonPressed() {
                await RemokuService.keyPress(address, "Right");
            },
            async volumeDownButtonPressed() {
                await RemokuService.keyPress(address, "VolumeDown");
            },
            async downButtonPressed() {
                await RemokuService.keyPress(address, "Down");
            },
            async volumeUpButtonPressed() {
                await RemokuService.keyPress(address, "VolumeUp");
            },
            async muteButtonPressed() {
                await RemokuService.keyPress(address, "VolumeMute");
            }
        }
    }
</script>
