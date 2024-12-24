 <template>
  <div id="app">
    <HeaderComponent />
    <router-view>

    </router-view>
    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  
}
body{
  background-color: #ffffff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>