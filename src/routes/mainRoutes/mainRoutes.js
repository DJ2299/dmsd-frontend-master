import React from 'react';

export const guestRoutes = [
  {
    path: '/',
    name: 'Signin',
    exact: true,
    component: React.lazy(() => import('../../views/auth/Login/Login')),
  },
  {
    path: '/sign-up',
    name: 'Signup',
    exact: true,
    component: React.lazy(() => import('../../views/auth/Login/Signup')),
  },
  {
    redirectRoute: true,
    name: 'Login',
    path: '/',
  },
];

export const userRoutes = [
  {
    path: '/home',
    name: 'Home',
    exact: true,
    component: React.lazy(() => import('../../views/user/Home/Home')),
  },
  {
    path: '/vehicle',
    name: 'Vehicle',
    exact: true,
    component: React.lazy(() => import('../../views/user/Vehicle/Vehicle')),
  },
  // {
  //   path: '/vehicle/vehicle/:vehicleId',
  //   name: 'Vehicle',
  //   exact: true,
  //   component: React.lazy(() => import('../../views/user/Vehicle/Vehicle')),
  // },
  {
    path: '/booking',
    name: 'Booking',
    exact: true,
    component: React.lazy(() => import('../../views/user/Booking/Booking')),
  },
  {
    path: '/servicerecords',
    name: 'ServiceRecords',
    exact: true,
    component: React.lazy(() => import('../../views/user/Booking/ServiceRecords')),
  },
  {
    path: '/profile',
    name: 'Profile',
    exact: true,
    component: React.lazy(() => import('../../views/user/Profile/Profile')),
  },
  {
    redirectRoute: true,
    name: 'homeRedirect',
    path: '/home',
    // rootRedirect: true,
  },
];

export const adminRoutes = [
  {
    path: '/home',
    name: 'Home',
    exact: true,
    component: React.lazy(() => import('../../views/admin/Home/Home')),
  },
  {
    path: '/booking',
    name: 'Booking',
    exact: true,
    component: React.lazy(() => import('../../views/admin/Booking/Booking')),
  },
  // {
  //   path: '/location',
  //   name: 'Location',
  //   exact: true,
  //   component: React.lazy(() => import('../../views/admin/Location/Location')),
  // },
  {
    path: '/report',
    name: 'Report',
    exact: true,
    component: React.lazy(() => import('../../views/admin/Report/Report')),
  },
  {
    path: '/report/pending-service',
    name: 'Report',
    exact: true,
    component: React.lazy(() => import('../../views/admin/Report/PendingService')),
  },
  {
    path: '/report/revenue',
    name: 'Report',
    exact: true,
    component: React.lazy(() => import('../../views/admin/Report/Revenue')),
  },
  {
    path: '/report/top-3',
    name: 'Report',
    exact: true,
    component: React.lazy(() => import('../../views/admin/Report/Top3Location')),
  },
  {
    path: '/technician',
    name: 'Technician',
    exact: true,
    component: React.lazy(() => import('../../views/admin/Technician/Technician')),
  },
  {
    path: '/manager',
    name: 'Manager',
    exact: true,
    component: React.lazy(() => import('../../views/admin/Manager/Manager')),
  },
  {
    path: '/service',
    name: 'Service',
    exact: true,
    component: React.lazy(() => import('../../views/admin/Service/Service')),
  },
  {
    path: '/parts',
    name: 'Part',
    exact: true,
    component: React.lazy(() => import('../../views/admin/Part/Part')),
  },
  {
    path: '/booking/user/:userId',
    name: 'Booking',
    exact: true,
    component: React.lazy(() => import('../../views/admin/Booking/Booking')),
  },
  {
    path: '/booking/loc/:locId',
    name: 'Booking',
    exact: true,
    component: React.lazy(() => import('../../views/admin/Booking/Booking')),
  },
  {
    path: '/customer',
    name: 'Customer',
    exact: true,
    component: React.lazy(() => import('../../views/admin/Customer/Customer')),
  },
  {
    redirectRoute: true,
    name: 'homeRedirect',
    path: '/home',
    // rootRedirect: true,
  },
];

export const employeeRoutes = [
  {
    path: '/home',
    name: 'Home',
    exact: true,
    component: React.lazy(() => import('../../views/employee/Home/Home')),
  },
  {
    path: '/booking',
    name: 'Booking',
    exact: true,
    component: React.lazy(() => import('../../views/employee/Booking/Booking')),
  },
  {
    path: '/service',
    name: 'Service',
    exact: true,
    component: React.lazy(() => import('../../views/employee/Service/Service')),
  },
  {
    redirectRoute: true,
    name: 'homeRedirect',
    path: '/home',
    // rootRedirect: true,
  },
];
