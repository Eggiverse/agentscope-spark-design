import { Avatar, AvatarProps } from 'antd';
import { forwardRef, useEffect, useState } from 'react';
import { useStyle } from './index.style';

const SparkAvatar = forwardRef<any, AvatarProps>((props, ref) => {
  const Style = useStyle();
  const { children, ...restProps } = props;
  const [modifiedChildren, setModifiedChildren] = useState<
    AvatarProps['children']
  >(props.children);

  useEffect(() => {
    if (typeof children === 'string') {
      setModifiedChildren(children.slice(0, 1));
      return;
    }
    setModifiedChildren(children);
  }, [children]);
  return (
    <>
      <Style />
      <Avatar ref={ref} {...restProps}>
        {modifiedChildren}
      </Avatar>
    </>
  );
});

export default SparkAvatar;
