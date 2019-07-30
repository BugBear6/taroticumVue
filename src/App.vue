<template>
  <div id="app">
		<Navbar/>
		<div class="container">
			<router-view />
		</div>
	</div>
</template>

<script>
import Navbar from './components/Navbar';


export default {
  name: 'app',
  components: {
	  Navbar
  }
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.container {
  text-align: center;
  margin-top: 40px;
}
</style>
