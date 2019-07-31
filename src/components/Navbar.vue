<template>
<div class="tarot-navbar">
	<ul class="tarot-navbar__list">
		<li>
			<router-link
				to="/"
				v-if="$route.name!=='select'">Return</router-link>
			<TemplatesDropdown
				v-if="$route.name==='ritual'"
			/>
		</li>
		<li>
			<a href=""
				v-on:click="refreshRoute"
				v-if="$route.name!=='select'">Refresh</a>
		</li>
	</ul>
</div>
</template>

<script>
import TemplatesDropdown from './TemplatesDropdown'

export default {
	name: 'Navbar',
	methods: {
		refreshRoute(e) {
			e.preventDefault()
			this.$router.go();
			return false;
		}
	},
	components: {
		TemplatesDropdown
	}
}
</script>

<style>
.tarot-navbar {
	background: transparent;
}
.tarot-navbar__list {
	height: 54px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 4px 20px;
	list-style: none;
	margin-bottom: 5px;
}
</style>
