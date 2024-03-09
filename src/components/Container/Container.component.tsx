import { FunctionComponent } from 'react';
import { ContainerProps } from './Container.interface';
import { ContainerBox } from './Container.styles';

export const Container: FunctionComponent<ContainerProps> = ({ children }) => {
  return <ContainerBox>{children}</ContainerBox>;
};
