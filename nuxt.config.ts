const manifestIcons = [
	{
		src: 'https://kyra.dev/icons/android-chrome-192x192.png',
		sizes: '192x192',
		type: 'image/png'
	},
	{
		src: 'https://kyra.dev/icons/android-chrome-512x512.png',
		sizes: '512x512',
		type: 'image/png'
	},
	{
		src: 'https://kyra.dev/icons/maskable_icon.png',
		sizes: '640x640',
		type: 'image/png',
		purpose: 'maskable'
	}
];

const name = 'Aura Román';
const description = "Aura Román's personal website and portfolio.";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ['@vueuse/nuxt', '@nuxtjs/tailwindcss', '@vite-pwa/nuxt'],

	runtimeConfig: {
		public: {
			DISCORD_USER_ID: '242043489611808769'
		}
	},

	nitro: {
		preset: 'cloudflare-pages',
		prerender: {
			routes: ['/', '/hrt', '/sitemap.xml']
		}
	},

	typescript: {
		shim: false,
		tsConfig: {
			compilerOptions: {
				moduleResolution: 'bundler'
			}
		}
	},

	pwa: {
		registerType: 'autoUpdate',
		devOptions: {
			enabled: false,
			type: 'module'
		},
		workbox: {
			navigateFallback: '/',
			globPatterns: ['**/*.{js,css,html,png,svg,ico,xml}']
		},
		manifest: {
			background_color: '#27272a',
			categories: ['kyra', 'kyranet', 'discord', 'programming', 'portfolio'],
			description,
			display: 'minimal-ui',
			lang: 'en',
			name,
			orientation: 'portrait-primary',
			scope: '/',
			short_name: 'Portfolio',
			start_url: '/',
			theme_color: '#18181b',
			icons: manifestIcons,
			shortcuts: [
				{
					name: 'About Aura Román',
					short_name: name,
					description: 'Go to the landing page',
					url: '/',
					icons: manifestIcons
				}
			]
		}
	},

	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			title: 'Aura Román',
			htmlAttrs: { lang: 'en' },
			link: [
				{ rel: 'alternate', href: 'https://kyra.dev' },
				{ rel: 'canonical', href: 'https://kyra.dev' },
				{ rel: 'apple-touch-icon', href: '/icons/apple-touch-icon.png' },
				{ rel: 'icon', href: '/favicon.ico' },
				{ rel: 'icon', href: '/icons/favicon-16x16.png' },
				{ rel: 'icon', href: '/icons/android-chrome-192x192.png' },
				{ rel: 'icon', href: '/icons/favicon-32x32.png' },
				{ rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg' },
				{ rel: 'shortcut icon', href: '/favicon.ico' }
			],
			meta: [
				{ 'http-equiv': 'Cache-Control', content: '1y' },
				{ 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
				{ 'http-equiv': 'Expires', content: '1y' },
				{ 'http-equiv': 'Pragma', content: '1y' },
				{ name: 'apple-mobile-web-app-capable', content: 'yes' },
				{ name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
				{ name: 'apple-mobile-web-app-title', content: name },
				{ name: 'application-name', content: name },
				{ name: 'audience', content: 'all' },
				{ name: 'author', content: 'Aura Román, kyradiscord@gmail.com' },
				{ name: 'coverage', content: 'Worldwide' },
				{ name: 'designer', content: 'Aura Román, kyradiscord@gmail.com' },
				{ name: 'distribution', content: 'Global' },
				{ name: 'googlebot', content: 'index,follow' },
				{ name: 'HandheldFriendly', content: 'True' },
				{ name: 'identifier-URL', content: 'https://kyra.dev' },
				{
					name: 'keywords',
					content: 'kyra, kyranet, discord, programming, portfolio'
				},
				{ name: 'msapplication-config', content: '/icons/browserconfig.xml' },
				{ name: 'msapplication-TileColor', content: '#292929' },
				{
					name: 'msapplication-TileImage',
					content: '/icons/mstile-144x144.png'
				},
				{ name: 'owner', content: 'Aura Román, kyradiscord@gmail.com' },
				{ name: 'rating', content: 'safe for kids' },
				{ name: 'reply-to', content: 'kyradiscord@gmail.com' },
				{ name: 'revisit-after', content: '7 days' },
				{ name: 'shortlink', content: 'https://kyra.dev' },
				{ name: 'target', content: 'all' },
				{ name: 'theme-color', content: '#292929' },
				{ name: 'twitter:card', content: 'summary' },
				{ name: 'twitter:creator', content: '@kyranet_' },
				{ name: 'twitter:site', content: '@kyranet_' },
				{ name: 'url', content: 'https://kyra.dev' },
				{ property: 'og:email', content: 'kyradiscord@gmail.com' },
				{ property: 'og:locale', content: 'en' },
				{ property: 'og:type', content: 'website' },
				{ property: 'og:url', content: 'https://kyra.dev' }
			]
		}
	},

	compatibilityDate: '2024-08-25'
});
