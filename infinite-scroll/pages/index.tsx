import { useState, useRef, useCallback } from 'react';
import usePosts from '@/hooks/usePosts';
import Post from '@/components/Post';

const Homepage = () => {
  const [pageNum, setPageNum] = useState<number>(1);
  const { isLoading, isError, error, results, hasNextPage } = usePosts(pageNum);

  const intObserver = useRef<IntersectionObserver>();
  const lastPostRef = useCallback(
    (post: HTMLDivElement) => {
      if (isLoading) return;

      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((posts) => {
        if (posts[0].isIntersecting && hasNextPage) {
          setPageNum((prev) => prev + 1);
        }
      });

      if (post) intObserver.current.observe(post);
    },
    [isLoading, hasNextPage]
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (isError)
    return <p className='center'>Error: {(error as Error).message}</p>;

  const content = results.map((post, i) => {
    if (results.length === i + 1) {
      return <Post ref={lastPostRef} key={i} post={post} />;
    }
    return <Post key={i} post={post} />;
  });

  return (
    <main className='container max-w-[1440px] mx-auto'>
      <h1 className='text-4xl font-bold text-gray-200 py-10 text-center'>
        &infin; Infinite Scroll &infin;
      </h1>
      <section className='flex justify-center items-center flex-wrap gap-8'>
        {content}
      </section>
      {isLoading && <p className='center'>Loading More Posts...</p>}
      <div className='fixed bottom-[5%] right-[2%]  block ml-auto'>
        <span
          onClick={scrollToTop}
          className='cursor-pointer font-semibold py-2 px-4 rounded-full bg-yellow-400 text-white'>
          Back to Top
        </span>
      </div>
    </main>
  );
};

export default Homepage;
