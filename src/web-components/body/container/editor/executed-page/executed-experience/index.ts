import { lazy } from 'react';
import withSuspense from '../../../../../../common-component/suspense';

const ExecutedExperience = withSuspense(
  lazy(() => import('./ExecutedExperience')),
);

export default ExecutedExperience;
