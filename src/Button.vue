<template>
    <div>
        <button class="btn" @click="clicked">{{value}}</button>
    </div>
    
</template>
<script>
export default {
    props:{
        value:{
            type:Number,
            default:0,
        }
    },
    methods:{
        clicked(){
            this.$emit("input",this.value + 1);
        }
    },
}
</script>
<style>
.btn {
    background-attachment: pink;
}
</style>