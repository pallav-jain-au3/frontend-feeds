import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Toolbar from './Toolbar';
import ActionButtons from './ActionButtons';

const PostEditor = ({ onPublish, onToolbarAction, disabled }) => {
  const [value, setValue] = useState('');

  const handlePublishClick = () => {
    onPublish(value);
    setValue('');
  };

  return (
    <div className='p-2 bg-gray-100 rounded-xl mb-6'>
      <div className='bg-white rounded-xl shadow'>
        <div className="p-4">
          <Toolbar onToolbarAction={onToolbarAction} />
          {disabled ? (
            <div className='text-gray-400 text-base pl-3 pt-3 pb-8'>
              How are you feeling today?
            </div>
          ) : (
            <textarea
              className="w-full border-none outline-none text-gray-700 text-base placeholder-gray-400 mb-2 pl-3 pt-3 resize-none"
              placeholder="How are you feeling today?"
              value={value}
              onChange={e => setValue(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handlePublishClick(); } }}
              rows={2}
              disabled={disabled}
            />
          )}
        </div>
        <ActionButtons onToolbarAction={onToolbarAction} onPublishClick={handlePublishClick} />
      </div>
    </div>
  );
};

PostEditor.propTypes = {
  onPublish: PropTypes.func.isRequired,
  onToolbarAction: PropTypes.func.isRequired,
};

export default PostEditor; 