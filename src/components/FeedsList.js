import React from 'react';
import FeedCard from './FeedCard';
import PropTypes from 'prop-types';
  
const FeedsList = ({ posts, actions }) => {
  if (posts.length === 0) {
    return null;
  }
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <FeedCard
          key={post.id}
          post={post}
          isNew={post.isNew}
          onCardAction={actions}
        />
      ))}
    </div>
  );
};

FeedsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    isNew: PropTypes.bool,
    author: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
    }),
    content: PropTypes.string,
    time: PropTypes.string,
    reaction: PropTypes.string,
  })),
  onCardAction: PropTypes.func,
};

export default FeedsList; 
