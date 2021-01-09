import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'rhob1',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      places: 3,
    },
    {
      id: 'u2',
      name: 'rhob22z',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      places: 3,
    },
    {
      id: 'u3',
      name: 'rasasfasf',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      places: 3,
    },
    {
      id: 'u4',
      name: 'aasfasf asfasf',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      places: 3,
    },
    {
      id: 'u5',
      name: 'safasfasf sfasfasf',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      places: 3,
    },
    {
      id: 'u6',
      name: 'rhobrenz buenavista',
      image:
        'https://www.facebook.com/photo/?fbid=2668268783186986&set=a.153836101296946',
      places: 3,
    },
    {
      id: 'u7',
      name: 'asfasfasf asfasfasfasf',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      places: 3,
    },
    {
      id: 'u8',
      name: 'asfasfasf asfasfas',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      places: 13,
    },
    {
      id: 'u9',
      name: 'asfsgasg afasfasfasf',
      image:
        'https://www.facebook.com/photo/?fbid=2668268783186986&set=a.153836101296946',
      places: 2,
    },
  ];

  return (
    <div>
      <UsersList items={USERS} />
    </div>
  );
};

export default Users;
