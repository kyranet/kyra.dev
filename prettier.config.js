export default {
	...(await import('@sapphire/prettier-config')).default,
	plugins: [await import('prettier-plugin-tailwindcss')]
};
