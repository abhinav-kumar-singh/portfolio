import { lazy } from 'react';
import withSuspense from '../suspense';

const Modal = withSuspense(lazy(() => import('./Modal')));

export default Modal;
