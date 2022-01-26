interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  author: {
    name: string;
    image: string;
  };
  description: string;
  comments: comment[];
  mainImage: {
    asset: {
      url: string;
    };
  };
  slug: {
    current: string;
  };
  body: [object];
}

interface comment {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _type: string;
  name: string;
  comment: string;
  email: string;
  post: {
    _ref: string;
    _type: string;
  };
}

interface Posts {
  posts: [Post];
}
