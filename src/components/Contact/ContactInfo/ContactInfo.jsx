import socialData from 'data/social';

export const ContactInfo = () => {
  const footerSocial = [...socialData];
  return (
    <>
      {/* <!-- BEGIN CONTACTS INFO --> */}
      <div className='contacts-info'>
        <div className='wrapper'>
          <div className='contacts-info__content'>
            <div className='contacts-info__text'>
              <h4>We take care of you</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Ex sed quam commodi. Laboriosam quidem molestiae tempora, 
                aliquid numquam accusamus qui autem ipsum nisi similique eos voluptas deserunt sit ab quisquam?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus veritatis velit eveniet quis unde.
                 In quia est voluptatibus magnam distinctio non facere temporibus officiis, molestiae ad, pariatur unde rerum nemo!
              </p>
            </div>
            <div className='contacts-info__social'>
              <span>Find us here:</span>
              <ul>
                {footerSocial.map((social, index) => (
                  <li key={index}>
                    <a href={social.path}>
                      <i className={social.icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- CONTACTS INFO EOF   -->  */}
    </>
  );
};
