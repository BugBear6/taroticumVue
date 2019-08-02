<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		v-bind:width="width"
		v-bind:height="height"
		viewBox="0 0 8 16">
		<path
			fill-rule="evenodd"
			v-bind:fill="iconColor"
			d="M7.5 8l-5 5L1 11.5 4.75 8 1 4.5 2.5 3l5 5z" />
	</svg>
</template>

<script>
	export default {
		name: 'IconSearch',
		props: {
			width: {
				type: [Number, String],
				default: 8
			},
			height: {
				type: [Number, String],
				default: 16
			},
			iconColor: {
				type: String,
				default: 'currentColor'
			}
		}
	};
</script>
