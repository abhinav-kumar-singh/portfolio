import { lazy } from 'react';
import withSuspense from '../../../../../../common-component/suspense';

const ExecutedProject = withSuspense(lazy(() => import('./ExecutedProject')));

export default ExecutedProject;
