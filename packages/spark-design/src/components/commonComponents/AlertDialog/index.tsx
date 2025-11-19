import PCAlertDialog from './pc';
import MobileAlertDialog from './mobile';

const AlertDialog = MOBILE ? MobileAlertDialog : PCAlertDialog;

export default AlertDialog;
export type { AlertDialogProps } from './pc';
