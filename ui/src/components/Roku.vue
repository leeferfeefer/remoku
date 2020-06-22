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
                <v-btn dark large color="grey lighten-1" class="ml-2 mr-2 mb-4" @click="muteButtonPressed">
                    <v-icon dark>fa-volume-off</v-icon>
                </v-btn>        
            </v-row>
            <v-progress-circular
                v-if="isLoading"
                class="mb-4"
                indeterminate
                color="primary"
            ></v-progress-circular>
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
            power: false,
            isLoading: false
        }),
        methods: {
            deviceSelected(selectedDevice) {
                address = selectedDevice;
                this.isConnected = true;
            },
            async powerButtonPressed() {
                this.power = !this.power;
                this.isLoading = true;
                await RemokuService.keyPress(address, this.power ? "PowerOn" : "PowerOff");
                this.isLoading = false;
            },
            async backButtonPressed() {
                this.isLoading = true;
                await RemokuService.keyPress(address, "Back");
                this.isLoading = false;
            },
            async searchButtonPressed() {
                this.isLoading = true;
                const searchResponse = await RemokuService.searchDevice();
                this.isLoading = false;
                for (let device of searchResponse.data) {
                    this.devices.push(device.location);
                }    
            },
            async optionsButtonPressed() {
                this.isLoading = true;
                await RemokuService.keyPress(address, "Info");
                this.isLoading = false;
            },
            async homeButtonPressed() {
                this.isLoading = true;
                await RemokuService.keyPress(address, "Home");
                this.isLoading = false;
            },
            async upButtonPressed() {
                this.isLoading = true;
                await RemokuService.keyPress(address, "Up");
                this.isLoading = false;
            },
            async inputButtonPressed() {
                this.isLoading = true;
                await RemokuService.keyPress(address, "InputHDMI1");
                this.isLoading = false;
            },
            async leftButtonPressed() {
                this.isLoading = true;
                await RemokuService.keyPress(address, "Left");
                this.isLoading = false;
            },
            async selectButtonPressed() {
                this.isLoading = true;
                await RemokuService.keyPress(address, "Select");
                this.isLoading = false;
            },
            async rightButtonPressed() {
                this.isLoading = true;
                await RemokuService.keyPress(address, "Right");
                this.isLoading = false;
            },
            async volumeDownButtonPressed() {
                this.isLoading = true;
                await RemokuService.keyPress(address, "VolumeDown");
                this.isLoading = false;
            },
            async downButtonPressed() {
                this.isLoading = true;                
                await RemokuService.keyPress(address, "Down");
                this.isLoading = false;
            },
            async volumeUpButtonPressed() {
                this.isLoading = true;
                await RemokuService.keyPress(address, "VolumeUp");
                this.isLoading = false;
            },
            async muteButtonPressed() {
                this.isLoading = true;
                await RemokuService.keyPress(address, "VolumeMute");
                this.isLoading = false;
            }
        }
    }
</script>
