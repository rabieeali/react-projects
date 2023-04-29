import React from 'react';
import { IPost } from '@/models';

interface PostProps {
  post: IPost;
}

const Post = React.forwardRef<HTMLElement, PostProps>(({ post }, ref) => {
  const postBody = (
    <div className='h-[20rem] w-[18rem] bg-slate-800 rounded text-white p-3 flex flex-col justify-between'>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p className='text-indigo-800 mt-auto'>
        Post ID: <span className='text-red-600'>{post.id}</span>
      </p>
    </div>
  );

  const content = ref ? (
    <article ref={ref}>{postBody}</article>
  ) : (
    <article>{postBody}</article>
  );

  return content;
});

Post.displayName = 'Post';

export default Post;
