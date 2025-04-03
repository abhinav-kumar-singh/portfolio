import { lazy } from 'react';
import withSuspense from '../../../../../common/suspense';

const ExecutedContact = withSuspense(lazy(() => import('./ExecutedContact')));

export default ExecutedContact;
