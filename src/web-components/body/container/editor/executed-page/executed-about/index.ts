import { lazy } from 'react';
import withSuspense from '../../../../../../common-component/suspense';

const ExecutedAbout = withSuspense(lazy(() => import('./ExecutedAbout')));

export default ExecutedAbout;
