import { getCommonConfig } from '@/config';
import { SparkSortLine } from '@agentscope-ai/icons';
import { Table as AntdTable, TableProps } from 'antd';
import classNames from 'classnames';
import { useStyle } from './index.style';

export default function Table<T = any>(props: TableProps<T>) {
  const commonConfig = getCommonConfig();
  const { sparkPrefix } = commonConfig;
  let { columns, ...restProps } = props;
  columns = columns?.map((column) => ({
    ...column,
    sortIcon:
      column.sortIcon ||
      (() => <SparkSortLine style={{ fontSize: 16, marginLeft: 8 }} />),
  }));
  const Style = useStyle();

  return (
    <>
      <Style />
      <AntdTable<T>
        className={classNames(`${sparkPrefix}-table`)}
        columns={columns}
        {...restProps}
      />
    </>
  );
}
