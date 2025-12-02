import { memo } from 'react';
import MarkdownX from './core';
import type { MarkdownProps } from './types';
import useTyping from './core/hooks/useTyping';
import { useProviderContext } from '@agentscope-ai/chat';
import classNames from 'classnames';
import Styles from './styles';


export default memo(function (props: MarkdownProps) {
  const baseFontSize = props.baseFontSize || 14;
  const baseLineHeight = props.baseLineHeight || 1.7;
  const content = useTyping({ content: props.content, typing: props.typing });
  const prefixCls = useProviderContext().getPrefixCls('markdown');


  return <>
    <Styles />
    <MarkdownX
      style={{ fontSize: baseFontSize, lineHeight: baseLineHeight }}
      openLinksInNewTab={true}
      className={classNames(prefixCls, props.className)}
      content={content}
    />
  </>;
});