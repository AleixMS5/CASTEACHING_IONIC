<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>User</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">User</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <ion-card>

        <ion-card-header>
          <ion-avatar >
            <img alt="Silhouette of a person's head"
                 :src="this.user.profile_photo_url"/>
          </ion-avatar>
          <ion-card-subtitle>{{ this.user && this.user.name }}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          {{ this.user && this.user.email }}

        </ion-card-content>
          <ion-card-content>
            <ion-button @click="login">Refresh</ion-button>
          </ion-card-content>

        </ion-card>

      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonButton,IonButtons,
  IonCard, IonCardContent,
  IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,IonAvatar
} from "@ionic/vue";
import store from "../store";
import axios from 'axios'
import { loadingController } from '@ionic/vue';


export default  {
  name: "UserU",
  components: {
    IonButtons,
    IonButton,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,IonAvatar,
    // eslint-disable-next-line vue/no-unused-components
    IonToolbar, IonCard,
    // eslint-disable-next-line vue/no-unused-components
    IonCardHeader,
    // eslint-disable-next-line vue/no-unused-components
    IonCardTitle,
    // eslint-disable-next-line vue/no-unused-components
    IonCardSubtitle,
    // eslint-disable-next-line vue/no-unused-components
    IonCardContent
  },
  data() {
    return {
      user: {}

    }

  },
  async mounted() {
    this.user = await store.get('user')

  }
  ,
  methods: {
    async login() {
      const loading = await loadingController.create({
        message: "carregant l'usuari",
        duration: 3000
      });

      loading.present();
      let response2 = null

      let token = await store.get('token')


      const axiosClient = axios.create({
        baseURL: 'https://casteaching.test/api',
        withCredentials: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        }
      })
      try {
        response2 = await axiosClient.get('user')
      } catch (error) {
        console.log(error);
      }
      const user = response2.data
      await store.set('user', user)

    }

    },



}
</script>

<style scoped>

</style>