export const Map = () => {
  return (
    <div className='contacts-map'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28983.22702991677!2d90.39607920093997!3d24.76450174668472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564f08e1564b13%3A0xdf7da0a35592c079!2sChorpara%20Bus%20Stop!5e0!3m2!1sen!2sbd!4v1638519781775!5m2!1sen!2sbd'
        width='100%'
        height='450'
        style={{ border: 0 }}
        loading='lazy'
      ></iframe>
    </div>
  );
};
