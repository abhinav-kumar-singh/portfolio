import { lazy } from 'react';
import withSuspense from '../../../../../../common-component/suspense';

const ExecutedSkills = withSuspense(lazy(() => import('./ExecutedSkills')));

export default ExecutedSkills;
