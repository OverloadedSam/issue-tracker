import { Text } from '@radix-ui/themes';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const ErrorMessage = ({ children }: Props) => {
  return (
    children && (
      <Text as='p' color='red'>
        {children}
      </Text>
    )
  );
};

export default ErrorMessage;
