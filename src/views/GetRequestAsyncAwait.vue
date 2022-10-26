<template>
    <div>
        <h1>Une Requete GET</h1>
        <p>Total Vue Packages : {{totalVuePackages}}</p>
    </div>
</template>

<script>
export default {
    name:'get-request-async-await',
    data() {
        return {
            totalVuePackages:null
        }
    },
    // On va fetch les données 
    async created(){
        const response = await fetch('https://api.npms.io/v2/search?q=vue');
        const data = await response.json();
        this.totalVuePackages = data.total;
    }
}
</script>