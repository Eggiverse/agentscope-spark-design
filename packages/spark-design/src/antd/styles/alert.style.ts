import createGlobalStyle from '@/libs/createStyle';

export const useAlertStyle = createGlobalStyle`
.${(p) => p.antPrefix}-alert {
  .${(p) => p.antPrefix}-alert-close-icon {
    font-size: 16px;
    
    .anticon-close {
      color: var(--${(p) => p.antPrefix}-color-text);
    }
  }
}
`;

export default useAlertStyle;
