import blogData from 'data/blog/blog';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { PostComment } from './PostComment/PostComment';
import { PostContent } from './PostContent/PostContent';

export const Post = () => {
  const router = useRouter();
  const blogs = [...blogData];
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (router.query.id) {
      const data = blogs.find((bg) => bg.id === router.query.id);
      setBlog(data);
    }
  }, [router.query.id]);

  if (!blog) return <></>;

  return (
    <>
      {/* <!-- BEGIN POST --> */}
      <div className='post'>
        <div className='wrapper'>
          <PostContent blog={blog} />
          <PostComment blog={blog} />
        </div>
        <img
          className='promo-video__decor js-img'
          src='/assets/img/promo-video__decor.jpg'
          alt=''
        />
      </div>
      {/* <!-- POST EOF   --> */}
    </>
  );
};
