import { lazy } from 'react';
import withSuspense from '../../../../common/suspense';

const ExecutedPage = withSuspense(lazy(() => import('./ExecutedPage')));

export default ExecutedPage;
