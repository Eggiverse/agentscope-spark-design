import XMarkdown from '@ant-design/x-markdown';
import { InnerMarkdownXProps } from '../types';
import Styles from '../styles';


export default function (props: InnerMarkdownXProps) {
  return <>
    <Styles />
    <XMarkdown {...props} />
  </>;
};