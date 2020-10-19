<template>
<div>
    <h1>TodoList</h1>
    <input v-model="text" />
    <button @click="add">summit</button>
    <ul>
        <li v-for="item in list" :key="item" :style="{color :item.done ? 'grey' : 'black'}" 
        @click="toggle(item)">{{item.text}}</li>
    </ul>
</div>

</template>

<script>
export default {
    data: ()=>({
        text: '',
        list: [],
    }),
    methods :{
        add(){
            const item = {
                text : this.text,
                done : false,
            };
            this.list.push(item);
            this.text ="";
        },
        toggle(item) {
            item.done = !item.done
        },
    }
}
</script>
