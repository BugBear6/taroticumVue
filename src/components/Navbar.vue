<template>
<div class="tarot-navbar">
	<ul class="tarot-navbar__list">
		<li>
			<router-link to="/">Return
			</router-link>
		</li>
		<li>
			<a href="" v-on:click="refreshRoute">Refresh
			</a>
		</li>
	</ul>
</div>
</template>

<script>
export default {
	name: 'Navbar',
	methods: {
		refreshRoute(e) {
			e.preventDefault()
			this.$router.go();
			return false;
		}
	}
}
</script>

<style>
.tarot-navbar {
	background: transparent;
}
.tarot-navbar__list {
	display: flex;
	justify-content: space-between;
	padding: 10px 20px;
	list-style: none;
}
</style>
