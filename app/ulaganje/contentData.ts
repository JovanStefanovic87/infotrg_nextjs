interface ContentBlockItem {
  type: 'text' | 'image';
  content: string | string[];
}

export const contentData: {
  title: string;
  description: string;
  coverImage: string;
  contentBlocks: ContentBlockItem[];
}[] = [
  {
    title: 'Block 1',
    description: 'This is the first block.',
    coverImage: '/images/image1.jpg',
    contentBlocks: [
      {
        type: 'text',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      { type: 'image', content: ['/images/image1.jpg'] },
      { type: 'text', content: 'Here is some more explanation with an image below.' },
      { type: 'image', content: ['/images/image1.jpg', '/images/image2.jpg'] },
      { type: 'text', content: 'Final part of the explanation.' },
    ],
  },
  {
    title: 'Block 2',
    description: 'This is the second block.',
    coverImage: '/images/image2.jpg',
    contentBlocks: [
      { type: 'text', content: 'This is the first part of the explanation.' },
      { type: 'image', content: ['/images/image1.jpg'] },
      { type: 'text', content: 'Here is some more explanation with an image below.' },
      { type: 'image', content: ['/images/image1.jpg', '/images/image2.jpg'] },
      { type: 'text', content: 'Final part of the explanation.' },
    ],
  },
  {
    title: 'Block 3',
    description: 'This is the third block.',
    coverImage: '/images/image1.jpg',
    contentBlocks: [
      { type: 'text', content: 'This is the first part of the explanation.' },
      { type: 'image', content: ['/images/image1.jpg'] },
      { type: 'text', content: 'Here is some more explanation with an image below.' },
      { type: 'image', content: ['/images/image1.jpg', '/images/image2.jpg'] },
      { type: 'text', content: 'Final part of the explanation.' },
    ],
  },
  {
    title: 'Block 4',
    description: 'This is the fourth block.',
    coverImage: '/images/image2.jpg',
    contentBlocks: [
      { type: 'text', content: 'This is the first part of the explanation.' },
      { type: 'image', content: ['/images/image1.jpg'] },
      { type: 'text', content: 'Here is some more explanation with an image below.' },
      { type: 'image', content: ['/images/image1.jpg', '/images/image2.jpg'] },
      { type: 'text', content: 'Final part of the explanation.' },
    ],
  },
  {
    title: 'Block 5',
    description: 'This is the fifth block.',
    coverImage: '/images/image1.jpg',
    contentBlocks: [
      { type: 'text', content: 'This is the first part of the explanation.' },
      { type: 'image', content: ['/images/image1.jpg'] },
      { type: 'text', content: 'Here is some more explanation with an image below.' },
      { type: 'image', content: ['/images/image1.jpg', '/images/image2.jpg'] },
      { type: 'text', content: 'Final part of the explanation.' },
    ],
  },
  {
    title: 'Block 6',
    description: 'This is the sixth block.',
    coverImage: '/images/image2.jpg',
    contentBlocks: [
      { type: 'text', content: 'This is the first part of the explanation.' },
      { type: 'image', content: ['/images/image1.jpg'] },
      { type: 'text', content: 'Here is some more explanation with an image below.' },
      { type: 'image', content: ['/images/image1.jpg', '/images/image2.jpg'] },
      { type: 'text', content: 'Final part of the explanation.' },
    ],
  },
  {
    title: 'Block 7',
    description: 'This is the seventh block.',
    coverImage: '/images/image1.jpg',
    contentBlocks: [
      { type: 'text', content: 'This is the first part of the explanation.' },
      { type: 'image', content: ['/images/image1.jpg'] },
      { type: 'text', content: 'Here is some more explanation with an image below.' },
      { type: 'image', content: ['/images/image1.jpg', '/images/image2.jpg'] },
      { type: 'text', content: 'Final part of the explanation.' },
    ],
  },
  {
    title: 'Block 8',
    description: 'This is the eighth block.',
    coverImage: '/images/image2.jpg',
    contentBlocks: [
      { type: 'text', content: 'This is the first part of the explanation.' },
      { type: 'image', content: ['/images/image1.jpg'] },
      { type: 'text', content: 'Here is some more explanation with an image below.' },
      { type: 'image', content: ['/images/image1.jpg', '/images/image2.jpg'] },
      { type: 'text', content: 'Final part of the explanation.' },
    ],
  },
  {
    title: 'Block 9',
    description: 'This is the ninth block.',
    coverImage: '/images/image1.jpg',
    contentBlocks: [
      { type: 'text', content: 'This is the first part of the explanation.' },
      { type: 'image', content: ['/images/image1.jpg'] },
      { type: 'text', content: 'Here is some more explanation with an image below.' },
      { type: 'image', content: ['/images/image1.jpg', '/images/image2.jpg'] },
      { type: 'text', content: 'Final part of the explanation.' },
    ],
  },
  {
    title: 'Block 10',
    description: 'This is the tenth block.',
    coverImage: '/images/image2.jpg',
    contentBlocks: [
      { type: 'text', content: 'This is the first part of the explanation.' },
      { type: 'image', content: ['/images/image1.jpg'] },
      { type: 'text', content: 'Here is some more explanation with an image below.' },
      { type: 'image', content: ['/images/image1.jpg', '/images/image2.jpg'] },
      { type: 'text', content: 'Final part of the explanation.' },
    ],
  },
  {
    title: 'Block 11',
    description: 'This is the eleventh block.',
    coverImage: '/images/image1.jpg',
    contentBlocks: [
      { type: 'text', content: 'This is the first part of the explanation.' },
      { type: 'image', content: ['/images/image1.jpg'] },
      { type: 'text', content: 'Here is some more explanation with an image below.' },
      { type: 'image', content: ['/images/image1.jpg', '/images/image2.jpg'] },
      { type: 'text', content: 'Final part of the explanation.' },
    ],
  },
  {
    title: 'Block 12',
    description: 'This is the twelfth block.',
    coverImage: '/images/image2.jpg',
    contentBlocks: [
      { type: 'text', content: 'This is the first part of the explanation.' },
      { type: 'image', content: ['/images/image1.jpg'] },
      { type: 'text', content: 'Here is some more explanation with an image below.' },
      { type: 'image', content: ['/images/image1.jpg', '/images/image2.jpg'] },
      { type: 'text', content: 'Final part of the explanation.' },
    ],
  },
];
