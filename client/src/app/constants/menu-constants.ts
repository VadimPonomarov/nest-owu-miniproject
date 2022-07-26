import {IMenuItem} from '../components/menu/interfaces/menu-item';

export const MenuConstants: IMenuItem[] = [
  {
    name: 'Clinics', icon: 'medication', url: '', children: [
      {name: '', icon: '', url: ''},
      {name: '', icon: '', url: ''},
    ]
  },
  {
    name: 'Doctors', icon: 'medication_liquid', url: '', children: [
      {name: '', icon: '', url: ''},
      {name: '', icon: '', url: ''},
    ]
  },
  {
    name: 'Services', icon: 'medical_information', url: 'services'
  },
  {
    name: 'Auth', icon: 'perm_identity', url: 'auth', children: [
      {name: 'Registration', icon: 'app_registration', url: 'registration'},
      {name: 'Login', icon: 'login', url: 'login'},
      {name: 'Logout', icon: 'logout', url: 'logout'},
    ]
  },
  {
    name: 'Users', icon: 'people', url: '', children: [
      {name: '', icon: '', url: ''},
      {name: '', icon: '', url: ''},
    ]
  },
];
