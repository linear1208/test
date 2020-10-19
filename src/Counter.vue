<template>
  <div >
    <h1>{{count}}</h1>
    
    <button @click="add">Add</button>
    <button @click="subtract">subtract</button>
    <button @click="addCount">addCount{{countNum}}</button>

    

  </div>
</template>

<script>
export default {
  data(){
    return { 
      count: 0,
      countNum:1,
    };
  },
  methods:{
    add(){
      this.count++;
    },
    subtract(){
      this.count--;
    },
    addCount(){
      this.count = this.count + this.countNum; 
      this.countNum++;
    }
  }
}
</script>