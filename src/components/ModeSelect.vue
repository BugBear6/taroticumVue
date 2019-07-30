<template>
<div class="mode-select">
	<ul class="mode-select__list">
		<li>
			<router-link to="/single">Single Card Select
			</router-link>
		</li>
		<li>
			<router-link to="/ritual">Five Cards Select
			</router-link>
		</li>
	</ul>
</div>
</template>

<script>

export default {
	name: 'ModeSelect'
};
</script>

<style>
.mode-select__list {
	list-style: none;
}
</style>
