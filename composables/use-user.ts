import type { GatewayActivity } from 'discord-api-types/v10';

export const useUser = () => {
	return useState<LanyardUser>('user', () => ({
		spotify: null,
		listening_to_spotify: false,
		kv: {},
		discord_user: {
			username: 'kyra',
			public_flags: 0,
			id: '242043489611808769',
			discriminator: '0001',
			bot: false,
			avatar: 'c3b5e662c664a61158b50b9f23520411'
		},
		discord_status: 'offline',
		activities: [],
		active_on_discord_web: false,
		active_on_discord_mobile: false,
		active_on_discord_desktop: false
	}));
};

export interface LanyardUser {
	spotify: null;
	listening_to_spotify: boolean;
	kv: {};
	discord_user: DiscordUser;
	discord_status: Status;
	activities: GatewayActivity[];
	active_on_discord_web: boolean;
	active_on_discord_mobile: boolean;
	active_on_discord_desktop: boolean;
}

export interface DiscordUser {
	username: string;
	public_flags: number;
	id: string;
	discriminator: string;
	bot: boolean;
	avatar: string;
}

export type Status = 'online' | 'idle' | 'dnd' | 'offline';
