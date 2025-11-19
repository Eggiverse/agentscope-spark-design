import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.antPrefix}-table-wrapper {
  .${(p) => p.antPrefix}-table-container {
    .${(p) => p.antPrefix}-table-thead > tr > th {
      padding: 8px 20px;
      font-weight: 400;
      color: var(--${(p) => p.antPrefix}-color-text-secondary);
    }
    
    table > thead > tr:first-child > *:first-child {
      border-start-start-radius: 0;
    }
    
    table > thead > tr:first-child > *:last-child {
      border-start-end-radius: 0;
    }
    
    .${(p) => p.antPrefix}-table-thead > tr > th:not(:last-child):not(.${(p) =>
  p.antPrefix}-table-selection-column):not(.${(p) =>
  p.antPrefix}-table-row-expand-icon-cell):not([colspan])::before {
            display: none !important;
          }
    
      .${(p) => p.antPrefix}-table-tbody > tr > td {
        padding: 16px 20px;
      }
      
      .${(p) => p.antPrefix}-table-tbody > tr {
        & > td:not(.${(p) => p.antPrefix}-table-selection-column):first-child,
        & > td.${(p) => p.antPrefix}-table-selection-column + td:not(
        .${(p) => p.antPrefix}-table-selection-column) {
          font-weight: 500;
        }
      }
    }
      
    .${(p) => p.antPrefix}-table-small {
      .${(p) => p.antPrefix}-table-tbody > tr > td {
        padding: 8px 20px;
      }
    }
  }
}
`;
