<template>
  <v-container fluid>
        <v-card
            class="mx-auto"
            max-width="500"
            align="center"
            justify="center"
        >
            <v-row
                align="center"
                justify="center"
                class="ma-4"
            >
                <v-btn dark large color="red">
                    <v-icon dark>fa-power-off</v-icon>
                </v-btn>        
            </v-row>
            <v-row
                align="center"
                justify="center"
                class="ma-4"
            >
                <v-btn dark large color="grey lighten-1" class="ml-2 mr-2">
                    <v-icon dark>fa-long-arrow-alt-left</v-icon>
                </v-btn>
                <v-btn dark large color="grey lighten-1" class="ml-2 mr-2">
                    <v-icon dark>fa-search</v-icon>
                </v-btn>                
                <v-btn dark large color="grey lighten-1" class="ml-2 mr-2">
                    <v-icon dark>fa-asterisk</v-icon>
                </v-btn>        
            </v-row>
            <v-row
                align="center"
                justify="center"
                class="ma-4"
            >
                <v-btn dark large color="grey lighten-1" class="ml-2 mr-2">
                    <v-icon dark>fa-home</v-icon>
                </v-btn>
                <v-btn dark large color="deep-purple accent-2" class="ml-2 mr-2">
                    <v-icon dark>fa-arrow-up</v-icon>
                </v-btn>                
                <v-btn dark large color="grey lighten-1" class="ml-2 mr-2">
                    <v-icon dark>fa-random</v-icon>
                </v-btn>        
            </v-row>
            <v-row
                align="center"
                justify="center"
                class="ma-4"
            >
                <v-btn dark large color="deep-purple accent-2" class="ml-2 mr-2">
                    <v-icon dark>fa-arrow-left</v-icon>
                </v-btn>
                <v-btn dark large color="deep-purple accent-2" class="ml-2 mr-2">
                    <v-icon dark>fa-circle</v-icon>
                </v-btn>                
                <v-btn dark large color="deep-purple accent-2" class="ml-2 mr-2">
                    <v-icon dark>fa-arrow-right</v-icon>
                </v-btn>        
            </v-row>
            <v-row
                align="center"
                justify="center"
                class="ma-4"
            >
                <v-btn dark large color="grey lighten-1" class="ml-2 mr-2">
                    <v-icon dark>fa-volume-down</v-icon>
                </v-btn>
                <v-btn dark large color="deep-purple accent-2" class="ml-2 mr-2">
                    <v-icon dark>fa-arrow-down</v-icon>
                </v-btn>                
                <v-btn dark large color="grey lighten-1" class="ml-2 mr-2">
                    <v-icon dark>fa-volume-up</v-icon>
                </v-btn>        
            </v-row>
            <v-row
                align="center"
                justify="center"
                class="ma-4"
            >
                <v-btn dark large color="grey lighten-1" class="ml-2 mr-2">
                    <v-icon dark>fa-volume-off</v-icon>
                </v-btn>        
            </v-row>
        </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'Roku',

    data: () => ({
    }),
  }
</script>
