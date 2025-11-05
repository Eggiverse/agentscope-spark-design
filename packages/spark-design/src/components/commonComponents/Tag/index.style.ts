import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.sparkPrefix}-tag {
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  
  .${(p) => p.antPrefix}-tag-close-icon {
    margin-left: 0;
  }
}

.${(p) => p.sparkPrefix}-tag-small {
  height: 20px;
  font-size: 12px;
  padding: 0 4px;
}

.${(p) => p.sparkPrefix}-tag-middle {
  height: 24px;
  font-size: 14px;
  padding: 0 6px;
}

.${(p) => p.sparkPrefix}-tag-purple {
  color: var(--${(p) => p.antPrefix}-color-purple);
  background: var(--${(p) => p.antPrefix}-color-purple-bg);
}

.${(p) => p.sparkPrefix}-tag-pink {
  color: var(--${(p) => p.antPrefix}-color-pink);
  background: var(--${(p) => p.antPrefix}-color-pink-bg);
}

.${(p) => p.sparkPrefix}-tag-yellow {
  color: var(--${(p) => p.antPrefix}-color-yellow);
  background: var(--${(p) => p.antPrefix}-color-yellow-bg);
}

.${(p) => p.sparkPrefix}-tag-teal {
  color: var(--${(p) => p.antPrefix}-color-teal);
  background: var(--${(p) => p.antPrefix}-color-teal-bg);
}

.${(p) => p.sparkPrefix}-tag-blue {
  color: var(--${(p) => p.antPrefix}-color-blue);
  background: var(--${(p) => p.antPrefix}-color-blue-bg);
}

.${(p) => p.sparkPrefix}-tag-mauve {
  color: var(--${(p) => p.antPrefix}-color-mauve);
  background: var(--${(p) => p.antPrefix}-color-mauve-bg);
}

.${(p) => p.sparkPrefix}-tag-transparent {
  color: var(--${(p) => p.antPrefix}-color-text-tertiary);
  background: transparent;
  border-color: var(--${(p) => p.antPrefix}-color-border-secondary);
}
`;
