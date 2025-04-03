import { lazy } from 'react';
import withSuspense from '../../../../../common/suspense';

const ExecutedExperience = withSuspense(
  lazy(() => import('./ExecutedExperience')),
);

export default ExecutedExperience;
