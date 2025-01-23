// Define image paths
export const imagePaths = {
  awareness: './images/awareness2.jpg',
  woman5: './images/woman5.jpg',
  xalimo: './images/xalimo.jpg',
  slide2: './images/slide2.jpg',
  meeting: './images/meeting.jpg',
  supportCenter: './images/support-center.jpg',
  woman2: './images/woman2.jpg',
  communityoutreach: './images/communityoutreach.jpg',
  communitysupport: './images/communitysupport.jpg'
};

// Helper function to get image path
export const getImagePath = (name) => imagePaths[name] || ''; 