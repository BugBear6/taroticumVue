<template>
	<div
		class="arcana-data"
		v-bind:class="{
			'arcana-data--minor': arcana === 'minor',
			'arcana-data--major': arcana === 'major'
		}">
		<span>{{getArcanaDataBlurb()}}</span>		
	</div>
</template>

<script>
import { BModal, VBModal, BTab, BTabs } from 'bootstrap-vue';

export default {
	name: 'CardModalArcanaData',
	props: [
		'arcana',
		'number',
		'color'
	],
	methods: {
		getArcanaDataBlurb() {
			if (this.arcana === 'Minor') {
				return `${this.getWord(this.number)} of ${this.color}`;
			}
			return `${this.number} of the ${this.arcana} Arcana`;
		},
		getWord(num) {
			const numbers = [
				'Zero',
				'One',
				'Two',
				'Three', 
				'Four',
				'Five',
				'Six',
				'Seven',
				'Eight',
				'Nine'
			];
			return numbers[Number(num)];
		}
	}
}
</script>

<style>
.arcana-data {
	border-bottom: 1px solid #d8d8d8;
	justify-content: flex-start;
}

.arcana-data--minor {
	display: flex;
	/* justify-content: space-between; */
}

.arcana-data--major {
	display: flex;
	/* justify-content: center; */
}
</style>
