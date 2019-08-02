<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		v-bind:width="width"
		v-bind:height="height"
		viewBox="0 0 8 16">
		<path
			fill-rule="evenodd"
			v-bind:fill="iconColor"
			d="M5.5 3L7 4.5 3.25 8 7 11.5 5.5 13l-5-5 5-5z" />
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
