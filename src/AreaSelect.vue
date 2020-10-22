<template>
  <div>
    AreaSelect
    <select v-model="selectedCity">
      <option v-for="city in cities" :value="city.code" :key="city.code">
        {{ city.name }}
      </option>
    </select>
    {{ selectedCity }}
    <select v-model="selectedRegion">
      <option v-for="region in regions" :value="region.code" :key="region.code">
        {{ region.name }}
      </option>
    </select>
    {{ selectedRegion }}
  </div>
</template>
<script>
//import zipcode from "./zipcode.json";
export default {
  data: () => ({
    selectedCity: 100,
    selectedRegion: 0,
    zipcode:undefined,
  }),
  computed: {
    cities() {
        if (!this.zipcode) return [];
      return this.zipcode.cities;
    },
    regions() {
      const city = this.cities.find((elm) => elm.code === this.selectedCity);
      if (!city) return [];
      return city.region;
    },
  },
  watch: {
    regions: {
      handler(val) {
        this.selectedRegion = val[0].code;
      },
      immediate: true,
    },
  },
    mounted(){
        fetch("http://10.2.1.217/zipcode")
        .then((response) => response.json())
        .then((zipcode) => (this.zipcode =zipcode));
    },

};
</script>