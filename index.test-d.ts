import {expectType} from 'tsd';
import getPackageUserAgent, {UserAgentHeader} from './index.js';

expectType<Promise<UserAgentHeader>>(getPackageUserAgent());
