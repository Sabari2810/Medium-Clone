export const fetchPosts: string = `
*[_type == "post"]{
    _id,
    title,
    author-> {
     name,
     image
    },
    description,
    mainImage,
    slug,
  }`;

export const fetchSlugs: string = `
*[_type == "post"]{
    _id,
    slug,
  }`;

export const fetchPost: string = `
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    author-> {
     name,
     image
    },
    "comments" : *[
      _type == "comment" && post._ref == ^._id && approved == true
    ],
    description,
    mainImage,
    slug,
    body
  }`;
