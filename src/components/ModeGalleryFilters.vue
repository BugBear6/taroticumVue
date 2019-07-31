<template>
	<div class="mode-gallery-filters">
	<b-nav pills>
		<ModeGalleryFilter
			v-bind:filters="filters"
			v-bind:filterName="'All'" />
		<ModeGalleryFilter
			v-bind:filters="filters"
			v-bind:filterName="'Major'" />
		<ModeGalleryFilter
			v-bind:filters="filters"
			v-bind:filterName="'Minor'" />
		<ModeGalleryFilter
			v-bind:filters="filters"
			v-bind:filterName="'Eyes'" />
		<ModeGalleryFilter
			v-bind:filters="filters"
			v-bind:filterName="'Crescents'" />
		<ModeGalleryFilter
			v-bind:filters="filters"
			v-bind:filterName="'Hourglasses'" />
		<ModeGalleryFilter
			v-bind:filters="filters"
			v-bind:filterName="'Roses'" />
		<ModeGalleryFilter
			v-bind:filters="filters"
			v-bind:filterName="'Skulls'" />
	</b-nav>
	</div>
</template>

<script>
import ModeGalleryFilter from './ModeGalleryFilter';
import { BNav } from 'bootstrap-vue';

export default {
	name: 'ModeGalleryFilters',
	props: [
		'filters'
	],
	components: {
		ModeGalleryFilter,
		'b-nav': BNav,
	}
};
</script>

<style>
.mode-gallery-filters {
	margin-bottom: 5px;
};
</style>
