import { Theme, useMediaQuery } from '@material-ui/core';
import { FC } from 'react';

const useSize = () => {
  const isMobileSize = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('xs')
  );
  return { isMobileSize };
};

const Sizing: FC = () => {
  const { isMobileSize } = useSize();
  return <div>{isMobileSize ? 'モバイルサイズだよ。' : 'PCサイズだよ。'}</div>;
};

export { Sizing };
