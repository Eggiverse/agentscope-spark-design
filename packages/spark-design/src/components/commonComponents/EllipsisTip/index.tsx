import { getCommonConfig } from '@/config';
import { Typography } from 'antd';
import classNames from 'classnames';
import React, { CSSProperties } from 'react';
import { useStyle } from './index.style';

export interface EllipsisTipProps {
  className?: string;
  style?: CSSProperties;
  /** 内容 */
  children: React.ReactNode;
  /** 最多几行; 默认1行 */
  rows?: number;
  /** 省略时hover的提示内容; 默认值为children */
  tooltip?: React.ReactNode;
}
/** 超过展示范围时展示tooltip */
export default function EllipsisTip(props: EllipsisTipProps) {
  const { className = '', style = {}, children, rows = 1, tooltip } = props;
  const _tooltip = tooltip || children;
  const { sparkPrefix } = getCommonConfig();
  const Style = useStyle();

  return (
    <>
      <Style />
      <Typography.Paragraph
        className={classNames(`${sparkPrefix}-ellipsis-tip`, className)}
        style={style}
        ellipsis={{ rows, tooltip: _tooltip }}
      >
        {children}
      </Typography.Paragraph>
    </>
  );
}
