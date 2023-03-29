import Link from 'next/link';

export const Banner = () => {
  return (
    <>
      {/* <!-- BEGIN MAIN BLOCK --> */}
      <div className='main-block load-bg'>
        <div className='wrapper'>
          <div className='main-block__content'>
            <h1 className='main-text' style={{ fontSize: '4.5rem'}}>S T A R S C A P E</h1>
            <p style={{ fontSize: '1.3rem' }}>
              "So much of universe, and so little time." <br></br>Dive into the starscape now...
            </p>

            <Link href='/shop'>
              <a className='btn'>Shop now</a>
            </Link>
          </div>
        </div>
        <img
          className='main-block__decor'
          src='/assets/img/main-block-decor.png'
          alt=''
          style={{ width: '80%', marginRight: '100px' }}
        />
      </div>

      

      {/* <!-- MAIN BLOCK EOF --> */}
    </>
  );
};



