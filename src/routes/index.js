import ForYou from '~/pages/ForYou';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/components/layout';
import Profile from '~/pages/Profile';
import configRoute from '~/config';
const publicRoutes = [
    { path: configRoute.home, component: ForYou },
    { path: configRoute.following, component: Following },
    { path: configRoute.profile, component: Profile },
    { path: configRoute.upload, component: Upload, layout: HeaderOnly },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
