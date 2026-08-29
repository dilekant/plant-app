import React from 'react';

import { ImageProps, Image as RNImage } from 'react-native';

const Image = React.forwardRef<React.ElementRef<typeof RNImage>, ImageProps>((props, ref) => {
  return (
    <RNImage
      ref={ref}
      style={{
        flex: 1,
        width: '100%',
      }}
      {...props}
    />
  );
});

export { Image };
