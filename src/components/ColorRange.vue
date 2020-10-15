<template>
  <div>
    <p>{{this.color}}: <label>
      <input
          type="number"
          v-model="colorComponent"
          @change="changeColorComponent"
          @input="changeColorComponent"
          min="0"
          max="255"
      >
    </label></p>
    <label>
      <input
          type="range"
          v-model="colorComponent"
          @change="changeColorComponent"
          @input="changeColorComponent"
          min="0"
          max="255"
      >
    </label>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true
    }
  },
  name: 'ColorRange',
  data() {
    return {
      colorComponent: '255',
    }
  },
   methods: {
     changeColorComponent() {
       let N = this.colorComponent
       this.$emit('change-color', N, this.color)
     }
   }
};
</script>

<style scoped>
input[type=number] {
  width: 40px;
}
</style>
