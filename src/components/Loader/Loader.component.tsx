import Image from 'next/image';
import { FunctionComponent } from 'react';
import spinnerIcon from '../../../public/icons/load-spinner.png';
import { LoaderBox } from './Loader.styles';

export const Loader: FunctionComponent = () => {
  return (
    <LoaderBox>
      <Image src={spinnerIcon} alt="spinner" />
    </LoaderBox>
  );
};
