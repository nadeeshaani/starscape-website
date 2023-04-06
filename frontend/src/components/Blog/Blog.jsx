import { Blogs } from './Blogs/Blogs';
import blogData from 'data/blog/blog';
import { usePagination } from 'components/utils/Pagination/Pagination';
import { PagingList } from 'components/shared/PagingList/PagingList';

export const Blog = () => {
  const blogs = [...blogData];
  const paginate = usePagination(blogs, 4);

  return (
    <>
      {/* <!-- BEGIN BLOG --> */}
      <div className='blog'>
        <div className='wrapper'>
          <Blogs blogs={paginate?.currentData()} />
        </div>

        {/* <!-- PAGINATE LIST --> */}
        <PagingList paginate={paginate} />
      </div>
      {/* <!-- BEGIN EOF --> */}
    </>
  );
};
