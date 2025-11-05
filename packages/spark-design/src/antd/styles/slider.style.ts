import createGlobalStyle from '@/libs/createStyle';

export const useSliderStyle = createGlobalStyle`
.${(p) => p.antPrefix}-slider {
  .${(p) => p.antPrefix}-slider-rail {
    border-radius: 8px;
  }
  
  .${(p) => p.antPrefix}-slider-track {
    border-radius: 8px;
  }
}

.${(p) => p.antPrefix}-slider-tooltip {
  .${(p) => p.antPrefix}-tooltip-inner {
    background: var(--${(p) => p.antPrefix}-color-bg-spotlight);
  }
}

/* 左右两侧的mark对齐 */
.${(p) => p.antPrefix}-slider-mark-text {
  &:first-child {
    transform: translateX(0%) !important;
  }
  
  &:last-child {
    transform: translateX(-100%) !important;
  }
}
`;

export default useSliderStyle;
