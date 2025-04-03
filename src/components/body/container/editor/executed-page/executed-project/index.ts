import { lazy } from 'react';
import withSuspense from '../../../../../common/suspense';

const ExecutedProject = withSuspense(lazy(() => import('./ExecutedProject')));

export default ExecutedProject;
