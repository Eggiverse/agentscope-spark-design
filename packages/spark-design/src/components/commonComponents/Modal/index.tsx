import PCModal from './pc';
import MobileModal from './mobile';

const SparkModal = MOBILE ? MobileModal : PCModal;

export default SparkModal;
export type { SparkModalProps } from './pc';
