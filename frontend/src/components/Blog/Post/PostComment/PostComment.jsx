export const PostComment = ({ blog }) => {
  return (
    <div className='post-comments'>
      <h3>
        comments <span>({`${blog.comments.length}`})</span>
      </h3>

      {blog.comments.map((comment, index) => (
        <div key={index}>
          <div className='post-comment'>
            <div className='post-comment__head'>
              <div className='post-comment__author'>
                <img src={comment.authorImage} className='js-img' alt='' />
                <span className='post-comment__name'>{comment.authorName}</span>
                <span className='post-comment__date'>{comment.date}</span>
              </div>
              <a href='#' className='post-comment__reply'>
                <i className='icon-reply'></i>reply
              </a>
            </div>
            <div className='post-comment__content'>{comment.content}</div>
          </div>
          {comment?.answers.map((answer, index) => (
            <div key={index} className='post-comment post-comment__answer'>
              <div className='post-comment__head'>
                <div className='post-comment__author'>
                  <img src={answer.authorImage} className='js-img' alt='' />
                  <span className='post-comment__name'>
                    {answer.authorName}
                  </span>
                  <span className='post-comment__date'>{answer.date}</span>
                </div>
                <a href='#' className='post-comment__reply'>
                  <i className='icon-reply'></i>reply
                </a>
              </div>
              <div className='post-comment__content'>{answer.content}</div>
            </div>
          ))}
        </div>
      ))}

      <div className='post-comment__form'>
        <div className='subscribe-form__img'>
          <img src='/assets/img/subscribe-img.png' className='js-img' alt='' />
        </div>
        <form>
          <h3>Leave a comment</h3>
          <p>Your email address will not be published.</p>
          <div className='box-field__row'>
            <div className='box-field'>
              <input
                type='text'
                className='form-control'
                placeholder='Enter your name'
              />
            </div>
            <div className='box-field'>
              <input
                type='email'
                className='form-control'
                placeholder='Enter your email'
              />
            </div>
            <div className='box-field'>
              <input
                type='text'
                className='form-control'
                placeholder='Enter your site'
              />
            </div>
          </div>
          <div className='box-field box-field__textarea'>
            <textarea
              className='form-control'
              placeholder='Enter your revive'
            ></textarea>
          </div>
          <button type='submit' className='btn'>
            post a comment
          </button>
        </form>
      </div>
    </div>
  );
};
