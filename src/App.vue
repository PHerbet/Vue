<script>
export default{
    name: 'App',
    methods:{
      afficherUser(unId){
        this.$router.push({name:'User', params:{id:unId}})
      }
    }
}

</script>

<template>
  <nav>
    <router-link to="/">Accueil</router-link>
    <router-link to="/about">About</router-link>
    <router-link :to="{name:'User', params:{id:'JCVD'}}">User1</router-link>
    <router-link :to="{name:'User', params:{id:'JOJO'}}">User2</router-link>
    <router-link :to="{name:'User', params:{id:'JAJA'}}">User3</router-link>
    <router-link to="/test-api">Test API</router-link>
    <router-link to="/test-api-async-await">Test API Async Await</router-link>
    <router-link to="/test-api-set-header">Test API Set Header</router-link>
    <router-link to="/test-api-error">Erreur</router-link>
    <router-link to="/test-api-post">Post</router-link>
    <!-- Version alternative on utilise le router plutot dans une fonction-->
    <button @click="afficherUser('Cable Hdmi')">User 4</button>
  </nav>
  <!-- ci dessous le router va faire le render des composants -->
  <router-view>
    
  </router-view>
</template>

<style scoped>
.router-link-active{
  font-weight: bold;
  color: red;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
