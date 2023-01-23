import {readPackage} from 'read-pkg';

function parsePackageRepositoryUrl(repositoryUrl) {
	return repositoryUrl
		.replace(/^(git\+)/, '')
		.replace(/(\.git)$/, '');
}

export default async function getPackageUserAgent() {
	const {name, repository} = await readPackage();
	const url = repository && repository.url ? parsePackageRepositoryUrl(repository.url) : undefined;
	const urlPart = url ? ` (${url})` : '';
	const userAgent = {
		'User-Agent': `${name}${urlPart}`
	};
	return userAgent;
}
