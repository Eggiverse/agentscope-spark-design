import createGlobalStyle from '@/libs/createStyle';

export const useStyle = MOBILE ? createGlobalStyle`
.${(p) => p.sparkPrefix}-alert-dialog {
  min-width: 300px;
  max-width: 80vw !important;
  
  .${(p) => p.antPrefix}-modal-body {
    padding: 0 0 12px 32px;
    font-size: 14px;
    color: var(--${(p) => p.antPrefix}-color-text-secondary);
  }

  .${(p) => p.antPrefix}-modal-confirm-content {
    padding: 0 0 12px 32px;
    font-size: 14px;
    color: var(--${(p) => p.antPrefix}-color-text-secondary);
  }

  .${(p) => p.antPrefix}-modal-confirm-paragraph {
    max-width: 100%;
  }
}
`: createGlobalStyle`
.${(p) => p.sparkPrefix}-alert-dialog {
  .${(p) => p.antPrefix}-modal-body {
    padding: 0 0 12px 32px;
    font-size: 14px;
    color: var(--${(p) => p.antPrefix}-color-text-secondary);
  }

  .${(p) => p.antPrefix}-modal-confirm-content {
    padding: 0 0 12px 32px;
    font-size: 14px;
    color: var(--${(p) => p.antPrefix}-color-text-secondary);
  }

  .${(p) => p.antPrefix}-modal-confirm-paragraph {
    max-width: 100%;
  }
}
`;
