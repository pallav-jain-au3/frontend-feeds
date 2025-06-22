import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';
import { useFeed } from '../contexts/FeedContext';

export const useAppContext = () => {
  const auth = useAuth();
  const toast = useToast();
  const feed = useFeed();

  return {
    auth,
    toast,
    feed
  };
}; 