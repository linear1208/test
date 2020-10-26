<template>
    <div>
        <ul>
            <li v-for="item in list" :key="item" >{{item.name}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data: ()=>({
        text: ''
    }),
    computed :{
        cart(){
            return this.$store.cart
        }
    }
}
</script>