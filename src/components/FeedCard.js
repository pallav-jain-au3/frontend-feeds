import React from 'react';
import PropTypes from 'prop-types';

const PostActions = ({ onAction }) => (
  <div className="flex items-center gap-6 pt-2 border-t border-gray-100 mt-2 pl-2">
    <button onClick={onAction} className="flex items-center text-gray-400 hover:text-gray-500 transition-colors w-5 h-5" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    </button>
    <button onClick={onAction} className="flex items-center text-gray-400 hover:text-gray-500 transition-colors w-5 h-5" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>

    </button>
    <button onClick={onAction} className="flex items-center text-gray-400 hover:text-gray-500 transition-colors w-5 h-5" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
      </svg>

    </button>
  </div>
);

const PostCard = ({ post, isNew = false, onCardAction }) => {

  return (
    <div className={`bg-gray-100 rounded-2xl p-2 space-y-2 ${isNew ? 'post-enter' : ''}`}>
      <div className='bg-white flex flex-col p-4 rounded-2xl shadow'>
        <div className="flex flex-col mb-1 gap-2">
          <div className='flex items-start gap-2'>
            <img src={post.author.avatar} alt={post.author.name} className="w-9 h-9 rounded-lg object-cover" />
            <div className="flex flex-col flex-1">
              <div className="font-semibold text-gray-900 text-sm">{post.author.name}</div>
              <div className="text-xs text-gray-400">{post.time}</div>
            </div>
          </div>
          <div className='flex items-start gap-2'>
            <div className='w-9 h-9 flex justify-center items-center text-lg bg-gray-100 rounded-full'>
              {post.reaction}
              </div>
            <div className="flex-1 text-gray-800 text-base whitespace-pre-line">{post.content}</div>
          </div>
        </div>
      </div>
      <PostActions onAction={onCardAction} />
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    isNew: PropTypes.bool,
    author: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
    }),
  }),
  isNew: PropTypes.bool,
  onCardAction: PropTypes.func,
};

export default PostCard; 
