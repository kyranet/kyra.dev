export default {
	...(await import('@sapphire/prettier-config')).default,
	plugins: ['prettier-plugin-tailwindcss']
};
