<template>
    <div>
        <h1>USER</h1>
        <p>{{id}}</p>
    </div>
</template>

<script>
    export default{
        name:'User',
        //Props, ce que l'on va récup en paramètre du routeur
        props: ['id']
    }
</script>
