<template>
  <div id="app" v-bind:style="styles">
    <h1 :style="styles">Slider RGB</h1>
    <ColorRange @change-color="changeColor" :color="colors[0]"/>
    <ColorRange @change-color="changeColor" :color="colors[1]"/>
    <ColorRange @change-color="changeColor" :color="colors[2]"/>
  </div>
</template>

<script>
import ColorRange from '@/components/ColorRange';
export default {
  name: 'App',
  components: {
    ColorRange
  },
  methods: {
    makeColorStr(
        R = this.components.R,
        G = this.components.G,
        B = this.components.B
    ) {
      return `rgb(${R}, ${G}, ${B})`;
    },
    changeColor(val, comp) {
      this.components[comp] = val;
      this.bg = this.makeColorStr();
      this.styles.backgroundColor = this.bg;
    }
  },
  data() {
    return {
      colors: ['R', 'G', 'B'],
      components: {
        R: 255,
        G: 255,
        B: 255
      },
      styles: {
        backgroundColor: '#fff'
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #fff;
}
</style>
