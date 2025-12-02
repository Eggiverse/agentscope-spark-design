import XMarkdown from '@ant-design/x-markdown';
import Latex from '@ant-design/x-markdown/plugins/Latex';

export default function (props) {
  return <XMarkdown {...props} config={{ extensions: Latex() }} />;
};