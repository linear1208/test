<template>
    <div>
        {{users.length}}
        <button @click="setAsce">Age Asce</button>
        <button @click="setDesc">Age Desc</button>
        <input v-model="search" />
        <ul class="list">
            <li class="item" v-for="(user,idx) in sortedUsers" :key="idx" >
                <img :src="user.picture" class="avatar" />
                <span>{{user.name}} ({{user.age}})</span>
            </li>
        </ul>
    </div>
</template>
<script>
import users from "./users.json";
export default {
    data:() => ({
        users,
        order :1,
        search:"",
    }),
    computed:{
        sortedUsers(){
            const users = [...this.users];

            const filtered = users.filter(
                (user) => user.name.toLowerCase().includes(this.search.toLowerCase())
                
            );
            return filtered.sort(
                (a,b) => (a.age - b.age)*this.order 
            )
        }
    },
    methods :{
        toggle(item) {
            item.done = !item.done
        },
        setAsce(){
            this.order =1;
        },
        setDesc(){
            this.order = -1;
        },
    }
}
</script>
<style scoped>
.avatar{
    width: 80px;
    height: 80px;
    display: block;
    border-radius: 50px;
}
.item{
    margin: 4px;
    text-align: center;
}
.list{
    list-style: none;
    display: flex;
    flex-flow: row wrap;
    padding: 0;
}
</style>