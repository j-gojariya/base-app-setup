import { memo } from 'react';

function ImageView({ src, alt, style, className }) {
  return <img alt={alt} className={className} src={src} style={style} />;
}

export default memo(ImageView);
