import { lazy } from 'react';
import withSuspense from '../../../../../common/suspense';

const ExecutedSkills = withSuspense(lazy(() => import('./ExecutedSkills')));

export default ExecutedSkills;
