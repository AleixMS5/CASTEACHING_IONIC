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
        <ion-list>


          <ion-item>

            <ion-avatar slot="start">
              <img alt="Silhouette of a person's head"
                   :src="this.user.profile_photo_url"/>
            </ion-avatar>

          </ion-item>
          <ion-item>

            <ion-label> {{ this.user && this.user.name }}</ion-label>

          </ion-item>
          <ion-item>
            <ion-label> {{ this.user && this.user.email }}</ion-label>
          </ion-item>

        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonButtons,
  IonCard, IonCardContent,
  IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/vue";
import store from "../store";


export default {
  name: "UserU",
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
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
}
</script>

<style scoped>

</style>