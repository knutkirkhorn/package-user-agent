// eslint-disable-next-line import/no-unresolved
import test from 'ava';
import getPackageUserAgent from './index.js';

test('returns user-agent for this package', async t => {
	const userAgent = await getPackageUserAgent();
	const expectedResult = {
		'User-Agent': 'package-user-agent (https://github.com/knutkirkhorn/package-user-agent)'
	};
	t.deepEqual(userAgent, expectedResult);
});
