import {expectType} from 'tsd';
import getPackageUserAgent, {UserAgentHeader} from ".";

expectType<Promise<UserAgentHeader>>(getPackageUserAgent());
