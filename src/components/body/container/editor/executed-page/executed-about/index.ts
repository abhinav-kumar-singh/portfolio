import { lazy } from 'react';
import withSuspense from '../../../../../common/suspense';

const ExecutedAbout = withSuspense(lazy(() => import('./ExecutedAbout')));

export default ExecutedAbout;
