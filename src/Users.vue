<template>
    <div>
        {{users.length}}
        <button @click="setAsce">Age Asce</button>
        <button @click="setDesc">Age Desc</button>
        <ul>
            <li v-for="(user,idx) in sortedUsers" :key="idx">{{user.name}} ({{user.age}})</li>
        </ul>
    </div>
</template>
<script>
import users from "./users.json";
export default {
    data:() => ({
        users,
        order :1,
    }),
    computed:{
        sortedUsers(){
            const users = [...this.users]
            return users.sort(
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