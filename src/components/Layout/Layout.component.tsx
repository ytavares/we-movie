import { FunctionComponent } from 'react';
import { LayoutProps } from './Layout.interface';
import { Container } from '../Container';

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <main>
      <Container>{children}</Container>
    </main>
  );
};
