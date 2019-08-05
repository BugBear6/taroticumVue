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
	},
	mounted: function() {
		var vm = this;
		window.addEventListener('keyup', event => {
			// Arrow Left
			if (event.keyCode === 37) {
				vm.$root.$emit('left-arrow-pressed');
			// Arrow Right
			} else if (event.keyCode === 39) {
				vm.$root.$emit('right-arrow-pressed');
			}
		});
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
	margin-top: 10px;
}
</style>
