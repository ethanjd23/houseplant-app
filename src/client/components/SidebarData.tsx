import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'MyPlants',
    path: '/myplants/1',
    icon: <IoIcons.IoIosImages />,
    cName: 'nav-text'
  },
  {
    title: 'Forum',
    path: '/forum/1',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Request',
    path: '/request',
    icon: <IoIcons.IoIosFlower />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/login',
    icon: <FaIcons.FaSignInAlt/>,
    cName: 'nav-text'
  }
];
