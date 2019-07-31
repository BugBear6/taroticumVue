<template>
	<b-nav-item
		class="mode-gallery-filter"
		v-bind:active="isFilterActive()"
		v-on:click="toggleFilter()">{{filterName}}</b-nav-item>
</template>

<script>
import { BNavItem } from 'bootstrap-vue';

export default {
	name: 'ModeGalleryFilter',
	props: [
		'filterName',
		'filters'
	],
	methods: {
		toggleFilter() {
			this.$root.$emit('toggle-filter', this.filterName.toLowerCase());
		},
		isFilterActive() {
			if (this.filters[ this.filterName.toLowerCase() ]) {
				return true
			}
		}
	},
	components: {
		'b-nav-item': BNavItem
	}
};
</script>

<style>
.mode-gallery-filter {
	margin-right: 5px;
};
</style>
