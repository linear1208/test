<template>
  <div class="table">
    <div
      class="cell"
      v-for="(grid, idx) in grids"
      :key="idx"
      @click="setGrid(idx)"
    >
      {{ symbol(grid) }}
    </div>
    <button @click="reset">ReSet</button>
  </div>
</template>
<script>
const initState = () => ({
  grids: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  player: 1,
});
export default {
  data: () => ({
    ...initState(),
  }),
  methods: {
    setGrid(idx) {
      if (this.grids[idx] !== 0) return;
      this.grids.splice(idx, 1, this.player);
      this.player *= -1;
    },
    symbol(val) {
      if (val === 1) return "O";
      if (val === -1) return "X";
    },
    reset() {
      const state = initState();
      this.grids = state.grids;
      this.player = state.player;
    },
  },
};
</script>
<style scoped>
.table {
  width: 320px;
}
.cell {
  display: inline-block;
  width: 100px;
  height: 100px;
  border: 1px solid grey;
  text-align: center;
  vertical-align: middle;
  line-height: 100px;
  font-weight: bolder;
}
</style>