import { getCommonConfig } from '@/config';
import $i18n from '@/i18n';
import { SparkMoreLine } from '@agentscope-ai/icons';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Flex, Pagination, PaginationProps } from 'antd';
import { useStyle } from './index.style';

const DEFAULT_SHOW_SIZE_CHANGE = {
  options: [
    {
      label: `10 ${$i18n.get({
        id: 'components.commonComponents.Pagination.Items',
        dm: '条',
      })} / ${$i18n.get({
        id: 'components.commonComponents.Pagination.Page',
        dm: '页',
      })}`,
      value: 10,
    },
    {
      label: `20 ${$i18n.get({
        id: 'components.commonComponents.Pagination.Items',
        dm: '条',
      })} / ${$i18n.get({
        id: 'components.commonComponents.Pagination.Page',
        dm: '页',
      })}`,
      value: 20,
    },
    {
      label: `50 ${$i18n.get({
        id: 'components.commonComponents.Pagination.Items',
        dm: '条',
      })} / ${$i18n.get({
        id: 'components.commonComponents.Pagination.Page',
        dm: '页',
      })}`,
      value: 50,
    },
    {
      label: `100 ${$i18n.get({
        id: 'components.commonComponents.Pagination.Items',
        dm: '条',
      })} / ${$i18n.get({
        id: 'components.commonComponents.Pagination.Page',
        dm: '页',
      })}`,
      value: 100,
    },
  ],
};

export interface SparkPaginationProps extends PaginationProps {
  /**
   * @description 是否展示上一页/下一页的切换按钮
   * @descriptionEn Whether to show previous/next page switch button
   * @default false
   */
  hideSwitchButton?: boolean;
}
export default (props: SparkPaginationProps) => {
  const { hideSwitchButton = false, ...restProps } = props;
  const { sparkPrefix } = getCommonConfig();
  const Style = useStyle();

  const mergedItemRender = () => {
    const sparkItemRender: PaginationProps['itemRender'] = (
      _,
      type,
      originalElement,
    ) => {
      // 优先处理省略号替换
      if (type === 'jump-prev' || type === 'jump-next') {
        // 替换省略号为自定义图标
        return <SparkMoreLine className={`${sparkPrefix}-jump-next-icon`} />;
      }
      // 如果禁用了切换按钮或者有自定义的itemRender，则不处理上一页下一页按钮
      if (hideSwitchButton || props.itemRender) {
        return originalElement;
      }

      if (type === 'prev') {
        return (
          <a>
            <Flex gap={8}>
              <LeftOutlined />{' '}
              <span>
                {$i18n.get({
                  id: 'components.commonComponents.Pagination.PreviousPage',
                  dm: '上一页',
                })}
              </span>
            </Flex>
          </a>
        );
      }
      if (type === 'next') {
        return (
          <a>
            <Flex gap={8}>
              <span>
                {$i18n.get({
                  id: 'components.commonComponents.Pagination.NextPage',
                  dm: '下一页',
                })}
              </span>{' '}
              <RightOutlined />
            </Flex>
          </a>
        );
      }
      return originalElement;
    };
    return sparkItemRender;
  };

  let shouldShowSizeChanger;

  if (
    restProps.showSizeChanger !== null &&
    restProps.showSizeChanger !== undefined
  ) {
    shouldShowSizeChanger = restProps.showSizeChanger;
  } else {
    shouldShowSizeChanger = restProps.total && restProps.total > 50;
  }
  const getMergedShowSizeChange = () => {
    if (props.showSizeChanger === true) {
      // 用户手动设置为 true，使用预置选项
      return DEFAULT_SHOW_SIZE_CHANGE;
    }
    if (props.showSizeChanger === false) {
      // 用户手动设为 false
      return false;
    }
    if (typeof props.showSizeChanger === 'object' && props.showSizeChanger) {
      // 用户手动传入的优先
      return props.showSizeChanger;
    }
    if (restProps.total && restProps.total > 50) {
      // 数据量大于 50，使用预置选项
      return DEFAULT_SHOW_SIZE_CHANGE;
    }
    return false;
  };

  return (
    <>
      <Style />
      <Pagination
        itemRender={mergedItemRender()}
        {...restProps}
        showSizeChanger={getMergedShowSizeChange()}
        className={`${sparkPrefix}-pagination`}
      />
    </>
  );
};
