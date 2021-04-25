import React from 'react';
import { bool, func } from 'prop-types';
import {
  MenuDrawerWrap, MenuItem, MenuLink, MenuList,
} from './navigation.styles';
import { Backdrop } from './Backdrop';
import { Socials } from '../Socials';
import { AppLogo } from '../Logo';

const navLinks = [
  {
    link: '#works',
    label: 'Works',
  }, {
    link: '#services',
    label: 'Services',
  }, {
    link: '#about',
    label: 'About',
  }, {
    link: '#blog',
    label: 'Blog',
  }, {
    link: '#contact',
    label: 'Contact',
  },
];

export const MenuDrawer = ({ isActive, clickHandler }) => (
  <>
    <Backdrop isActive={isActive} clickHandler={clickHandler} />
    <MenuDrawerWrap isActive={isActive}>
      <AppLogo />
      <MenuList>
        {
          navLinks.map(({ link, label }) => (
            <MenuItem key={label}>
              <MenuLink href={link}>{label}</MenuLink>
            </MenuItem>
          ))
        }
      </MenuList>
      <Socials />
    </MenuDrawerWrap>
  </>
);

MenuDrawer.defaultProps = {
  isActive: false,
  clickHandler: () => {},
};

MenuDrawer.propTypes = {
  isActive: bool,
  clickHandler: func,
};
