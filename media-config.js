'use strict';

// Add local asset paths or direct media URLs here. Empty sources keep the
// review placeholders without requesting missing files.
// For GIF / animated WebP, use type: 'image'. Video is muted and loops inline.
window.SCREENMEM_MEDIA = {
  pc: { type: 'video', src: '', poster: '', label: 'PC interaction example' },
  mobile: { type: 'video', src: '', poster: '', label: 'Mobile interaction example' },
  construction: { type: 'video', src: '', poster: '', label: 'Trace-grounded construction of ScreenMem' },
  // Set this to the external video collection (viewing and downloads), e.g. a Hugging Face dataset.
  moreVideosUrl: '',
};
