<template>
	<div class="card-modal-controls">
		<b-button
			v-on:click="showPrevCard()"
			size="sm"
			class="card-modal-controls__button card-modal-controls__button--prev"
			variant="outline-primary"><IconChevronLeft /></b-button>
		<b-button
			v-on:click="showNextCard()"
			size="sm"
			class="card-modal-controls__button card-modal-controls__button--next"
			variant="outline-primary"><IconChevronRight /></b-button>
	</div>
</template>

<script>
import IconChevronLeft from './icons/IconChevronLeft';
import IconChevronRight from './icons/IconChevronRight';
import { BButton } from 'bootstrap-vue';

export default {
	name: 'CardModalControls',
	components: {
		IconChevronLeft,
		IconChevronRight,
		'b-button': BButton
	},
	methods: {
		showNextCard() {
			this.$root.$emit('show-next-card');
		},
		showPrevCard() {
			this.$root.$emit('show-prev-card');
		}
	}
}
</script>

<style>
.card-modal-controls {
}
.card-modal-controls__button {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
}
.card-modal-controls__button--prev {
	left: 8px;
}
.card-modal-controls__button--next {
	right: 8px;
}
</style>
