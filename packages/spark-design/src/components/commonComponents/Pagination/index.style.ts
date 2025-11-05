import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.sparkPrefix}-pagination {
  color: var(--${(p) => p.sparkPrefix}-color-text) !important;
  
  .${(p) => p.antPrefix}-pagination-total-text {
    font-weight: 500;
  }
  
  .${(p) => p.antPrefix}-select-selection-item {
    font-weight: 500;
  }
  
  .${(p) => p.antPrefix}-pagination-item-active.${(p) =>
  p.antPrefix}-pagination-item {
    border-color: var(--${(p) => p.antPrefix}-color-border-secondary);
    border-radius: 8px;
    
    a {
      color: var(--${(p) => p.antPrefix}-color-text) !important;
    }
  }
  
  a {
    color: var(--${(p) => p.antPrefix}-color-text) !important;
  }
  
  .${(p) => p.antPrefix}-pagination-jump-next {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .${(p) => p.antPrefix}-pagination-jump-prev {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
`;
