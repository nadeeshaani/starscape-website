import { Card } from './Card/Card';

const instaData = [
  {
    image: '/assets/img/insta-photo1.jpg',
    link: '#/',
    id: '1',
  },
  {
    image: '/assets/img/insta-photo2.jpg',
    link: '#/',
    id: '2',
  },
  {
    image: '/assets/img/insta-photo3.jpg',
    link: '#/',
    id: '3',
  },
  {
    image: '/assets/img/insta-photo4.jpg',
    link: '#/',
    id: '4',
  },
  {
    image: '/assets/img/insta-photo5.jpg',
    link: '#/',
    id: '5',
  },
  {
    image: '/assets/img/insta-photo6.jpg',
    link: '#/',
    id: '6',
  },
];

export const Insta = () => {
  return (
    <>
      {/* <!-- BEGIN INSTA PHOTOS --> */}
      <div className='insta-photos'>
        {instaData.map((insta) => (
          <Card key={insta.id} insta={insta} />
        ))}
      </div>
      {/* <!-- INSTA PHOTOS EOF   --> */}
    </>
  );
};
