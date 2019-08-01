<template>
	<b-form inline
		class="mode-gallery-search"
		v-on:submit.prevent="onSearchSubmit">
		<b-input-group
			size="sm">
			<b-form-input
				v-model="searchPhrase"
				placeholder="Search Card Name..."></b-form-input>
				<b-input-group-append>
					<b-button
						type="submit"
						variant="primary">
						<iconSearch v-bind:iconColor="'#fff'"/>
					</b-button>
				</b-input-group-append>
		</b-input-group>
	</b-form>
</template>

<script>
import { BForm, BButton, BInputGroup, BFormInput, BInputGroupAppend } from 'bootstrap-vue';
import IconSearch from './icons/IconSearch';

export default {
	name: 'ModeGallerySearch',
	data() {
		return {
			searchPhrase: ''
		};
	},
	props: [
		'filterName',
		'filters'
	],
	methods: {
		onSearchSubmit() {
			this.$root.$emit('update-search-phrase', this.searchPhrase);
		}
	},
	components: {
		IconSearch,
		'b-form': BForm,
		'b-button': BButton,
		'b-input-group': BInputGroup,
		'b-form-input': BFormInput,
		'b-input-group-append': BInputGroupAppend
	}
};
</script>
