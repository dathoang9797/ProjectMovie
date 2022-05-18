import { nanoid } from '@reduxjs/toolkit';
import UserTemplate from '@Templates/UserTemplate';
import React, { lazy } from 'react';

// const HomePage = lazy(() => import('@Pages/HomePage'));

export const routerUserTemplate = [
  // { path: process.env.REACT_APP_LINK_HOME, componentPage: HomePage },
];

// export const routerAdminTemplate = [
//   { path: process.env.REACT_APP_LINK_ADMIN_DASH_BOARD, componentPage: DashBoardPage },
//   { path: process.env.REACT_APP_LINK_ADMIN_ROOM_MANAGER, componentPage: RoomManagerPage },
//   { path: process.env.REACT_APP_LINK_ADMIN_ROOM_MANAGER_EDIT, componentPage: RoomManagerEditPage },
//   {
//     path: process.env.REACT_APP_LINK_ADMIN_ROOM_MANAGER_PROFILE,
//     componentPage: RoomManagerProfilePage,
//   },
//   { path: process.env.REACT_APP_LINK_ADMIN_LOCATIONS_MANAGER, componentPage: LocationManagerPage },
//   {
//     path: process.env.REACT_APP_LINK_ADMIN_LOCATIONS_MANAGER_EDIT,
//     componentPage: LocationManagerEditPage,
//   },
//   {
//     path: process.env.REACT_APP_LINK_ADMIN_LOCATIONS_MANAGER_PROFILE,
//     componentPage: LocationManagerProfilePage,
//   },
//   { path: process.env.REACT_APP_LINK_ADMIN_USER_MANAGER, componentPage: UserManagerPage },
//   { path: process.env.REACT_APP_LINK_ADMIN_USER_MANAGER_EDIT, componentPage: UserManagerEditPage },
//   {
//     path: process.env.REACT_APP_LINK_ADMIN_USER_MANAGER_PROFILE,
//     componentPage: UserManagerProfilePage,
//   },
//   {
//     path: process.env.REACT_APP_LINK_ADMIN_EVALUATE_MANAGER,
//     componentPage: EvaluateManagerPage,
//   },
//   {
//     path: process.env.REACT_APP_LINK_ADMIN_TICKETS_MANAGER,
//     componentPage: TicketManagerPage,
//   },
// ];

const renderUserTemplate = (() => {
  //Need Declare same id to react can't switch case properly in react-router
  const idUserTemplate = nanoid();
  return routerUserTemplate.map(({ componentPage, path }) => (
    <UserTemplate key={idUserTemplate} Component={componentPage} path={path} exact />
  ));
})();

// const renderAdminTemplate = (() => {
//   const idAdminTemplate = nanoid();
//   return routerAdminTemplate.map(({ componentPage, path }) => (
//     <AdminTemplate key={idAdminTemplate} Component={componentPage} path={path} exact />
//   ));
// })();
//
export const routerTemplates = [...renderUserTemplate];
