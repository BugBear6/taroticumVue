<template>
<div class="mode-select">
	<b-card-group deck>
		<ModeSelectCard
			v-bind:header="'Single Card Select'"
			v-bind:desc="'Just draw a card and trust your instincts.'"
			v-bind:to="'/single'"
		/>
		<ModeSelectCard
			v-bind:header="'Five Cards Select'"
			v-bind:desc="'If you do the entire reading you will get a more complete picture.'"
			v-bind:to="'/ritual'"
		/>
	</b-card-group>
	<hr>
	<b-card-group deck style="display: flex; justify-content: center;">
		<ModeSelectCard
		v-bind:header="'Gallery'"
		v-bind:desc="'Browse the cards.'"
		style="max-width: 30rem;"
		v-bind:to="'/gallery'"
	/>
	</b-card-group>
</div>
</template>

<script>
import { BCardGroup } from 'bootstrap-vue'
import ModeSelectCard from './ModeSelectCard';

export default {
	name: 'ModeSelect',
	components: {
		ModeSelectCard,
		'b-card-group': BCardGroup
	} 
};
</script>

<style>
.mode-select__list {
	list-style: none;
	text-align: center;
}
</style>
