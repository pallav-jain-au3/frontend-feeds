import React, { useEffect } from 'react';
import PostEditor from '../components/PostEditor';
import PostCard from '../components/FeedCard';
import { useAppContext } from '../hooks/useAppContext';

const FeedPage = () => {
  const { feed, auth, toast } = useAppContext();
  const { posts, loading, fetchPosts, addPost } = feed;
  const { isAuthenticated, openAuthModal, user } = auth;
  const { showToast } = toast;

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleClick = (e) => {
    if (!isAuthenticated) {
      openAuthModal('signin');
    }
  }

  const handlePublish = (content) => {
    if (!isAuthenticated) return;
    if (!content.trim()) {
      showToast('Please enter some content', 'error');
      return false;
    }

    const newPost = {
      id: Date.now(),
      author: {
        name: user.username,
        avatar: `https://api.dicebear.com/7.x/identicon/svg?seed=${user.username}`
      },
      content: content.trim(),
      time: 'Just now',
      reaction: '📝'
    };
    showToast('Post published successfully!', 'success');
    addPost(newPost);
    return true;
  };

  const handleActions = () => {
    if (!isAuthenticated) return;
    showToast(`functionality not implemented`, 'error');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8" onClick={handleClick}>
      <PostEditor onPublish={handlePublish} onToolbarAction={handleActions} disabled={!isAuthenticated} />
      <div className="space-y-4">
        {posts.map((post, index) => (
          <PostCard
            key={post.id}
            post={post}
            isNew={index === 0 && post.time === 'Just now'}
            onCardAction={handleActions}
          />
        ))}
      </div>
    </div>
  );
};

export default FeedPage; 