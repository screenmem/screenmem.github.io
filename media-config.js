'use strict';

// Add local asset paths or direct media URLs here. Empty sources keep the
// review placeholders without requesting missing files.
// For GIF / animated WebP, use type: 'image'. Video is muted and loops inline.
window.SCREENMEM_MEDIA = {
  pc: { type: 'video', src: 'assets/screenmem-pc-preview.mp4?v=2', poster: '', label: 'PC interaction example' },
  mobile: { type: 'video', src: 'assets/screenmem-mobile-preview.mp4?v=2', poster: '', label: 'Mobile interaction example' },
  // Set this to the external video collection (viewing and downloads), e.g. a Hugging Face dataset.
  moreVideosUrl: '',
};
