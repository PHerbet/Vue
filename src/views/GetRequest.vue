<template>
    <div>
        <h1>Une Requete GET</h1>
        <p>Total Vue Packages : {{totalVuePackages}}</p>
    </div>
</template>

<script>
export default {
    name:'get-request',
    data() {
        return {
            totalVuePackages:null
        }
    },
    // On va fetch les données 
    created(){
        fetch('https://api.npms.io/v2/search?q=vue')
        .then(response=> response.json())
        .then(data=>(this.totalVuePackages=data.total))
    }
}

</script>