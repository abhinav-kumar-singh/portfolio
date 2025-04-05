import { lazy } from 'react';
import withSuspense from '../../common-component/suspense';

const MobileView = withSuspense(lazy(() => import('./MobileView')));

export default MobileView;
