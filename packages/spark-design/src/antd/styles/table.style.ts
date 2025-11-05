import createGlobalStyle from '@/libs/createStyle';

export const useTableStyle = createGlobalStyle`
.${(p) => p.antPrefix}-table-cell {
  border-radius: 0;
}
`;

export default useTableStyle;
