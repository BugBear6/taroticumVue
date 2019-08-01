<template>
	<b-form inline
		class="mode-gallery-search"
		v-on:submit.prevent>
		<b-input-group
			size="sm">
			<b-input-group-text slot="append">
				<iconSearch/>
			</b-input-group-text>
			<b-form-input
				v-on:keyup="typeSearchPhrase"
				v-model="searchPhrase"
				placeholder="Search Card Name..."></b-form-input>
		</b-input-group>
	</b-form>
</template>

<script>
import _ from 'lodash';
import { BForm, BInputGroup, BFormInput, BInputGroupText } from 'bootstrap-vue';
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
	created() {
		this.typeSearchPhrase = _.debounce(() => {
			this.$root.$emit('update-search-phrase', this.searchPhrase);
		}, 750);
	},
	components: {
		IconSearch,
		'b-form': BForm,
		'b-input-group': BInputGroup,
		'b-form-input': BFormInput,
		'b-input-group-text': BInputGroupText
	}
};
</script>
