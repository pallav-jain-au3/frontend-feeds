import React from 'react';
import PropTypes from 'prop-types';

const TOOLBAR = {
  PARAGRAPH: { label: 'Paragraph', icon: null },
  BOLD: { label: 'B', icon: <b>B</b> },
  ITALIC: { label: 'I', icon: <i>I</i> },
  UNDERLINE: { label: 'U', icon: <u>U</u> },
  OL: {
    label: 'OL', icon: <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>
    </span>
  },
  UL: {
    label: 'UL', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.242 5.992h12m-12 6.003H20.24m-12 5.999h12M4.117 7.495v-3.75H2.99m1.125 3.75H2.99m1.125 0H5.24m-1.92 2.577a1.125 1.125 0 1 1 1.591 1.59l-1.83 1.83h2.16M2.99 15.745h1.125a1.125 1.125 0 0 1 0 2.25H3.74m0-.002h.375a1.125 1.125 0 0 1 0 2.25H2.99" />
    </svg>
  },
  CODE: { label: '<>', icon: <span>{'<>'}</span> },
  DELETE: {
    label: 'Delete', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg>
  },
};

const Toolbar = ({ onToolbarAction }) => {
  return (
    <div className="flex items-center space-x-1 mb-2 justify-between w-full">
      <div className='flex items-center gap-1 bg-gray-100 px-1 py-1 rounded-lg flex-wrap'>
        <button
          key={TOOLBAR.PARAGRAPH.label}
          className="text-gray-500 text-xs font-semibold shadow-sm bg-white px-1.5 py-0.5 rounded"
          onClick={onToolbarAction}
          type="button"
        >
          {TOOLBAR.PARAGRAPH.label}
        </button>
        <button
          key={TOOLBAR.BOLD.label}
          className="text-gray-500 shadow px-1.5 py-0.5 bg-white rounded text-xs font-semibold"
          onClick={onToolbarAction}
          type="button"
        >
          {TOOLBAR.BOLD.icon}
        </button>
        <button
          key={TOOLBAR.ITALIC.label}
          className="text-gray-500 px-1.5 py-0.5 rounded text-xs font-semibold"
          onClick={onToolbarAction}
          type="button"
        >
          {TOOLBAR.ITALIC.icon}
        </button>
        <button
          key={TOOLBAR.UNDERLINE.label}
          className="text-gray-500 px-1.5 py-0.5 rounded text-xs font-semibold"
          onClick={onToolbarAction}
          type="button"
        >
          {TOOLBAR.UNDERLINE.icon}
        </button>
        <div className='flex items-center gap-1'>
          <button
            key={TOOLBAR.OL.label}
            className="text-gray-500 px-1.5 py-0.5 rounded text-xs font-semibold"
            onClick={onToolbarAction}
            type="button"
          >
            {TOOLBAR.OL.icon}
          </button>
          <button
            key={TOOLBAR.UL.label}
            className="text-gray-500 px-1.5 py-0.5 rounded text-xs font-semibold"
            onClick={onToolbarAction}
            type="button"
          >
            {TOOLBAR.UL.icon}
          </button>
        </div>
        <button
          key={TOOLBAR.CODE.label}
          className="text-gray-500 px-1.5 py-0.5 rounded text-xs font-semibold"
          onClick={onToolbarAction}
          type="button"
        >
          {TOOLBAR.CODE.icon}
        </button>
      </div>
      <div className='flex items-center gap-1 flex-shrink-0'>
        <button
          key={TOOLBAR.DELETE.label}
          className="text-red-500 px-1.5 py-1 rounded bg-red-100 hover:text-red-700 transition-colors"
          onClick={onToolbarAction}
          type="button"
        >
          {TOOLBAR.DELETE.icon}
        </button>
      </div>
    </div>
  );
};

Toolbar.propTypes = {
  onToolbarAction: PropTypes.func.isRequired,
};

export default Toolbar; 