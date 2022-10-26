<template>
    <div>
        <h1>Une Requete GET</h1>
        <p>Total Vue Packages : {{totalVuePackages}}</p>
        <p>Message d'erreur : {{errorMessage}}</p>
    </div>
</template>

<script>
export default {
    name:'get-request-error-handling',
    data() {
        return {
            totalVuePackages:null,
            errorMessage:null
        }
    },
    // On va fetch les données 
    created(){
        fetch('https://api.npms.io/v2/search?q=vue')
        .then(async response=> 
        {const data = await response.json();
        if (!response.ok){
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        this.totalVuePackages = data.total;
        })
        .catch(error=>{
            this.errorMessage = error;
            console.error('Alerte, il y a eu une erreur', error)
        })
    }
}

</script>