import { lazy } from 'react';
import withSuspense from '../../../../../../common-component/suspense';

const ExecutedContact = withSuspense(lazy(() => import('./ExecutedContact')));

export default ExecutedContact;
