<template>
	<div class="mode-gallery">
		<ModeGalleryFilters
			v-bind:filters="filters"
		/>
		<b-row>
			<b-col
				v-for="(card, index) in cardsFiltered"
				v-bind:key="index"
				cols="2">
				<b-card class="card-item border-0">
					<Card
						class="card--cards-list"
						v-bind:alwaysReveal="true"
						v-bind:cardData="card"
					/>
					<h5 class="text-center mt-1 mb-1">{{card.name}}</h5>
				</b-card>
			</b-col>
		</b-row>
	</div>
</template>

<script>
import Card from './Card';
import ModeGalleryFilters from './ModeGalleryFilters';
import { getAllCards } from '../helpers/getCards';
import { BCard, BButton, BRow, BCol} from 'bootstrap-vue';

export default {
	name: 'ModeGallery',
	data() {
		return {
			cards: getAllCards(),
			filters: {
				all: true,
				major: false,
				minor: false,
				eyes: false,
				crescents: false,
				hourglasses: false,
				roses: false,
				skulls: false
			}
		}
	},
	methods: {
		toggleFilter(filterName) {
			// cannot unselect ALL
			if (filterName === 'all' && this.filters.all) return false;

			// select ALL and unselect evert other filter
			if (filterName === 'all' && !this.filters.all) {
				Object.keys(this.filters).forEach(key => {
					if (key !== 'all') this.filters[key] = false;
				});
			}
			// unselect ALL when some other filter is selected
			if (filterName !== 'all') this.filters.all = false;

			// set selected filter to true
			this.filters[filterName] = !this.filters[filterName];

			// set ALL when no othe filters selected
			if (this.getActiveFilters().length === 0) this.filters.all = true;
		},
		getActiveFilters() {
			return Object.keys(this.filters).filter(key => this.filters[key]);
		}
	},
	computed: {
		cardsFiltered() {
			if (this.filters.all) {
				return this.cards;
			} 
			const activeFilters = this.getActiveFilters();
			const filtered = this.cards.filter(cardObj => {
				const color = cardObj.color ? cardObj.color.toLowerCase() : '';
				const arcana = cardObj.arcana ? cardObj.arcana.toLowerCase() : '';
				if (activeFilters.indexOf(color) > -1 || activeFilters.indexOf(arcana) > -1 ) {
					return cardObj;
				}
			})
			return filtered;
		}
	},
	created() {
		this.$root.$on('toggle-filter', this.toggleFilter);
	},
	components: {
		Card,
		ModeGalleryFilters,
		'b-row': BRow,
		'b-col': BCol,
		'b-card': BCard
	} 
};
</script>

<style>
.mode-gallery .card-body {
	padding: 5px 5px 10px 5px;
}
</style>
