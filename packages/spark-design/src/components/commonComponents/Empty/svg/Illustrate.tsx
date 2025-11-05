import useToken from 'antd/es/theme/useToken';
import { useEffect, useState } from 'react';

interface IProps {
  /**
   * @description 图片地址
   */
  svgUrl: string;
  /**
   * @description 映射关系
   */
  tokenMap?: Record<string, string>;

  className?: string;

  size: number | string;
}

let svgContainer: SVGSVGElement = document.querySelector('#empty-svg-container');

export default function Illustrate(props: IProps) {
  const [ , , , , cssVar] = useToken();
  const { svgUrl, tokenMap = {}, className, size } = props;
  const isSvg = svgUrl.includes('.svg');
  const [svgString, setSvgString] = useState('');

  useEffect(() => {
    if (!svgContainer) {
      const container = document.createElement('div');
      container.innerHTML = '<svg></svg>';
      svgContainer = container.querySelector('svg') as SVGSVGElement;
      svgContainer.id = 'empty-svg-container';
      svgContainer.setAttribute('aria-hidden', 'true');
      svgContainer.style.position = 'absolute';
      svgContainer.style.width = '0';
      svgContainer.style.height = '0';
      svgContainer.style.overflow = 'hidden';
      document.body.insertBefore(svgContainer, document.body.firstChild);
    }
  }, []);

  useEffect(() => {
    if (svgContainer && cssVar?.key) {
      svgContainer.classList.forEach(key => svgContainer.classList.remove(key));
      svgContainer.classList.add(cssVar.key);
    }
  }, [cssVar?.key]);

  useEffect(() => {
    if (!isSvg) {
      return;
    }

    const svgId = btoa(svgUrl);
    const svgString = `<svg><use xlink:href="#${svgId}"></use></svg>`
    
    setSvgString(svgString);

    if (document.getElementById(svgId)) {
      return;
    }

    const symbolStr = `<symbol id="${svgId}"></symbol>`;

    svgContainer.innerHTML = svgContainer.innerHTML + symbolStr;

    fetch(svgUrl)
      .then(res => res.text())
      .then(res => {
        let str = res;
        Object.keys(tokenMap).forEach(key => {
          str = str.replace(new RegExp(key, 'g'), tokenMap[key]);
        });
        
        // 提取viewBox属性
        const viewBoxMatch = str.match(/viewBox="([^"]*)"/);
        const viewBox = viewBoxMatch ? viewBoxMatch[1] : '';

        const symbolElement = document.getElementById(svgId);

        let symbolContentStr = str.replace(/<svg[^>]*>/, '');
        symbolContentStr = symbolContentStr.replace(/<\/svg>/, '');

        if (viewBox) {
          symbolElement.setAttribute('viewBox', viewBox);
        }
        
        symbolElement.innerHTML = symbolContentStr;
      });
  }, [svgUrl]);

  if (isSvg) {
    return <div className={className} dangerouslySetInnerHTML={{ __html: svgString }} style={{ width: size, height: size }} />;
  }

  return <img src={svgUrl} className={className} style={{ width: size, height: size }} />;
}