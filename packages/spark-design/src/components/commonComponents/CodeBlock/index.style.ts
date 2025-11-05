import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.sparkPrefix}-code-block {
  width: 100%;
}

.cm-theme {
  border: none !important;
  border-radius: 0 !important;
}

.cm-gutters {
  border-right: none !important;
  background-color: var(--${(p) => p.antPrefix}-color-bg-base) !important;
}

.cm-editor {
  background-color: var(--${(p) => p.antPrefix}-color-bg-base) !important;
}

.cm-gutterElement:not(:first-child) {
  color: var(--${(p) => p.antPrefix}-color-text-tertiary);
  height: 24px !important;
  line-height: 24px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  
  span:not([title*="Unfold line"]) {
    height: 30px !important;
  }
}

.cm-line {
  height: 24px !important;
  line-height: 24px !important;
}

.cm-lineNumbers .cm-gutterElement {
  padding: 0px 4px 0px 12px !important;
}

.cm-activeLine,
.cm-activeLineGutter {
  background-color: var(--${(p) =>
    p.antPrefix}-color-fill-secondary) !important;
}

.cm-button {
  background-image: none !important;
  background: var(--${(p) => p.antPrefix}-color-bg-base) !important;
  border: 1px solid var(--${(p) =>
    p.antPrefix}-color-border-secondary) !important;
  border-radius: 4px !important;
  
  &:hover {
    color: var(--${(p) => p.antPrefix}-color-text-secondary);
    cursor: pointer;
  }
}

.cm-search {
  background: var(--${(p) => p.antPrefix}-color-fill-secondary) !important;
}

.cm-panel.cm-search label {
  display: inline-flex;
  align-items: center;
}

.cm-panel.cm-search [name=close] {
  right: 8px !important;
  background: none !important;
  font-size: 16px !important;
  color: var(--${(p) => p.antPrefix}-color-text-tertiary) !important;
}

.cm-textfield {
  border-radius: 4px;
}

.cm-panel.cm-search input[type=checkbox] {
  border: 1px solid var(--${(p) =>
    p.antPrefix}-color-border-secondary) !important;
}

.cm-focused {
  outline: none !important;
}
`;
