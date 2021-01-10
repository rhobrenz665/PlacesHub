import React from 'react';
import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Rizal Park',
    description: 'Leneta tastsat utas as places teasa ',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/c/cd/Rizal_Park_Front_View.jpg',
    address: 'Liwasang Rizal, Ermita, Maynila, 1000 Kalakhang Maynila',
    location: {
      lat: '14.582919',
      lng: '120.979683',
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Luneta Park',
    description:
      'Ang Liwasang Rizal o Parkeng Rizal (Ingles: Rizal Park, Kastila: Parque Rizal) ',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/c/cd/Rizal_Park_Front_View.jpg',
    address: 'Liwasang Rizal, Ermita, Maynila, 1000 Kalakhang Maynila',
    location: {
      lat: 14.582919,
      lng: 120.979683,
    },
    creator: 'u2',
  },
];

const UserPlaces = () => {
  return (
    <>
      <PlaceList items={DUMMY_PLACES} />
    </>
  );
};

export default UserPlaces;
