import { Card } from './Card/Card';

export const Blogs = ({ blogs }) => {
  return (
    <>
      {/* <!-- BEGIN  BLOG --> */}

      <div className='blog-items'>
        {blogs.map((blog) => (
          <Card key={blog.id} blog={blog} />
        ))}
      </div>

      {/* <!--  BLOG EOF   --> */}
    </>
  );
};
