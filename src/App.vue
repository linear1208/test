<template>
  <!--TicTacToe></TicTacToe-->
  <div>
    <router-link to="/game">TicTacToe</router-link> <br />
    <router-link to="/list">TodoList</router-link> <br />
    <router-link to="/user">Users</router-link> <br />
    <router-link to="/cart">Carts</router-link> <br />
    <router-view />
    <h1>{{ $store.state.msg }}</h1>
    <button @click="$store.commit('setMsg','HI')">HI</button>
    <h1>{{ $store.state.cart.name }}</h1>
  </div>
</template>

<script>
//import TicTacToe from './TicTacToe' ;
export default {};
</script>