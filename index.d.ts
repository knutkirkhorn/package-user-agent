export type UserAgentHeader = {
	'User-Agent': string
}

export default function getPackageUserAgent() : Promise<UserAgentHeader>;
