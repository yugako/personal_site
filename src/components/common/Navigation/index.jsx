import React, { useState } from 'react';
import { AppLogo } from '../Logo';
import { Container, Flex } from '../../../layout/layout.styles';
import { MenuToggle } from './MenuToggle';
import { MenuDrawer } from './MenuDrawer';

export const Navigation = () => {
  const [isActive, setIsActive] = useState();

  const toggleButton = () => {
    setIsActive(!isActive);
  };
  return (
    <Container>
      <Flex horizontal="space-between">
        <AppLogo />
        <MenuToggle isActive={isActive} onToggle={toggleButton} />
        <MenuDrawer clickHandler={toggleButton} isActive={isActive} />
      </Flex>
    </Container>
  );
};
