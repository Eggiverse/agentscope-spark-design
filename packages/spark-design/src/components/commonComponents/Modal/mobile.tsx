import { getCommonConfig } from '@/config';
import { CloseOutlined } from '@agentscope-ai/icons-override-antd';
import { Modal, ModalProps } from 'antd';
import classNames from 'classnames';
import { useEffect } from 'react';
import { useStyle } from './index.style';

export interface SparkModalProps extends ModalProps {
  /**
   * @description 底部额外内容
   * @descriptionEn footer extra content
   */
  info?: string | React.ReactNode;
  /**
   * @description 是否显示分割线
   * @descriptionEn whether to show divider
   * @default true
   */
  showDivider?: boolean;
}

const lockBodyScroll = () => {
  const originalStyle = window.getComputedStyle(document.body).overflow;
  const originalPosition = window.getComputedStyle(document.body).position;
  const scrollY = window.scrollY;

  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
  document.body.style.top = `-${scrollY}px`;

  return () => {
    document.body.style.overflow = originalStyle;
    document.body.style.position = originalPosition;
    document.body.style.width = '';
    document.body.style.top = '';
    window.scrollTo(0, scrollY);
  };
};

const SparkModal = (props: SparkModalProps) => {
  const Style = useStyle();
  const { sparkPrefix } = getCommonConfig();
  const { showDivider = true, closable = true, ...restProps } = props;

  useEffect(() => {
    if (props.open) {
      const unlock = lockBodyScroll();
      return unlock;
    }
  }, [props.open]);

  const renderFooter = (originNode) => {
    return props.info ? (
      <div className={`${sparkPrefix}-modal-footer-wrapper`}>
        <span className={`${sparkPrefix}-modal-footer-info`}>{props.info}</span>
        <div className={`${sparkPrefix}-modal-footer-origin-node`}>
          {originNode}
        </div>
      </div>
    ) : (
      originNode
    );
  };

  const mergedCloseIcon = closable
    ? props.closeIcon || (
        <CloseOutlined
          className={`${sparkPrefix}-modal-title-close`}
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            props.onCancel?.(e);
          }}
        />
      )
    : null;
  const mergedFooter = props.footer === undefined ? renderFooter : props.footer;

  return (
    <>
      <Style />
      <Modal
        {...restProps}
        centered={false}
        closeIcon={null}
        width={props.width || 'auto'}
        title={
          <div className={`${sparkPrefix}-modal-title-wrapper`}>
            <div className={classNames(`${sparkPrefix}-modal-title`, { [`${sparkPrefix}-modal-title-padding`]: closable })}>{props.title}</div>
            {mergedCloseIcon}
          </div>
        }
        wrapClassName={classNames(
          `${sparkPrefix}-modal`,
          { [`${sparkPrefix}-show-divider`]: showDivider },
          props.wrapClassName,
          'animate-in',
        )}
        footer={mergedFooter}
        transitionName=""
      />
    </>
  );
};

SparkModal.useModal = Modal.useModal;
SparkModal.success = Modal.success;
SparkModal.error = Modal.error;
SparkModal.warning = Modal.warning;
SparkModal.info = Modal.info;
SparkModal.confirm = Modal.confirm;

SparkModal.SMALL_WIDTH = 640;
SparkModal.MEDIUM_WIDTH = 800;
SparkModal.LARGE_WIDTH = 960;

export default SparkModal;

