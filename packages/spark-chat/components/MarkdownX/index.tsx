import { memo, useMemo } from 'react';
import MarkdownX from './core';
import type { MarkdownProps } from './types';
import useTyping from './core/hooks/useTyping';
import { useProviderContext } from '@agentscope-ai/chat';
import classNames from 'classnames';
import Styles from './styles';
import Null from './core/components/Null';
import CodeBlock from './core/components/CodeBlock';
import DisabledImage from './core/components/DisableImage';
import Media from './core/components/Media';


export default memo(function (props: MarkdownProps) {
  const baseFontSize = props.baseFontSize || 14;
  const baseLineHeight = props.baseLineHeight || 1.7;
  const content = useTyping({ content: props.content, typing: props.typing });
  const prefixCls = useProviderContext().getPrefixCls('markdown');

  const components = useMemo(() => ({
    pre: CodeBlock,
    style: Null,
    script: Null,
    img: props.disableImage ? DisabledImage : Media,
  }), [props.disableImage]);

  return <>
    <Styles />
    <MarkdownX
      components={components}
      style={{ fontSize: baseFontSize, lineHeight: baseLineHeight }}
      openLinksInNewTab={true}
      className={classNames(prefixCls, props.className)}
      content={content}
    />
  </>;
});