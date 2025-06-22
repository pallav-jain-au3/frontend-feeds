import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const FeedContext = createContext();

export const useFeed = () => {
  const context = useContext(FeedContext);
  if (!context) {
    throw new Error('useFeed must be used within a FeedProvider');
  }
  return context;
};

export const FeedProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    setLoading(true);
   new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          author: {
            name: 'John Doe',
            avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=John'
          },
          content: 'Just finished a great workout! 💪 Feeling energized and ready to tackle the day.',
          time: '2 hours ago',
          reaction: '💪'
        },
        {
          id: 2,
          author: {
            name: 'Jane Smith',
            avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=Jane'
          },
          content: 'Working on some exciting new features for our app. Can\'t wait to share them with everyone! 🚀',
          time: '4 hours ago',
          reaction: '🚀'
        },
        {
          id: 3,
          author: {
            name: 'Mike Johnson',
            avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=Mike'
          },
          content: 'Beautiful sunset today! Nature never fails to amaze me. 🌅',
          time: '6 hours ago',
          reaction: '🌅'
        }
   
      ])
    }, 1000);
   }).then((data) => {
    setPosts(data);
    setLoading(false);
   })
  };


  const addPost = (post) => {
    setPosts(prevPosts => [post, ...prevPosts]);
  };

  const value = {
    posts,
    loading,
    addPost, 
    fetchPosts
  };

  return (
    <FeedContext.Provider value={value}>
      {children}
    </FeedContext.Provider>
  );
};

FeedProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FeedContext; 