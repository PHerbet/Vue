<template>
    <div>
        <h1>Un petite Requete POST</h1>
        <p>Le ID : {{postId}}</p>
    </div>
</template>

<script>
export default {
    name:'post-request',
    data() {
        return {
            postId:null
        }
    },
    created(){
        const requestOptions = {
            method:'POST',
            headers:{'Content-Type':"application/json"},
            body: JSON.stringify({title:'Vue POST request Exemple'})
        };
        fetch('https://jsonplaceholder.typicode.com/posts',requestOptions)
        .then(response=>response.json())
        .then(data=>(this.postId = data.id))
    }
}
</script>