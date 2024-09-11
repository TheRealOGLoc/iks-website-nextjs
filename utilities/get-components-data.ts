import { queryPopulate } from "./query-populate"

export async function GetData(query: { [key: string]: any }, contentType: string, config?: {}) {
  const url = queryPopulate(query, contentType);
  const response = await fetch(url, config);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  let components = data.data.attributes.components;
  for (let i = 0; i < components.length; i++) {
    const name = components[i].__component;
    const componentName = name.split(".")[1];
    components[i].__component = componentName;
  }
  return components;
}

export async function GetSeoData(query: {}, contentType: string, config?: {}) {
  const SEOComponentName = "global-elements.seo"
  const url = queryPopulate(query, contentType);
  const response = await fetch(url, config);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  let components = data.data.attributes.components;
  for (let i = 0; i < components.length; i++) {
    const name = components[i].__component;
    if (name === SEOComponentName) {
      return components[i]
    }
  }
  return null;
}

export async function GetCaseStudiesData(query: {}, contentType: string, config?: {}) {
  const componentName = "blogs-elements.blog-content";
  const url = queryPopulate(query, contentType);
  const data = await fetch(url, config)
  const response = await data.json()
  let blogsData = response.data;
  let blogs: any[] = [];

  for (let i = 0; i < blogsData.length; i++) {
    const slug = blogsData[i].attributes.slug
    for (let j = 0; j < blogsData[i].attributes.components.length; j++) {
      if (blogsData[i].attributes.components[j].__component === componentName) {
        let data = blogsData[i].attributes.components[j]
        data.slug = slug
        blogs.push(blogsData[i].attributes.components[j]);
      }
    }
  }
  blogs = sortBlogsByPostTime(blogs);
  blogs = modifyBlogs(blogs);
  return blogs.slice(0, 3);
}

export async function GetBlogsData(query: {}, contentType: string, config?: {}) {
  const componentName = "blogs-elements.blog-content";
  const url = queryPopulate(query, contentType);
  const data = await fetch(url, config)
  const response = await data.json()
  let blogsData = response.data;
  let blogs: any[] = [];

  for (let i = 0; i < blogsData.length; i++) {
    const slug = blogsData[i].attributes.slug
    for (let j = 0; j < blogsData[i].attributes.components.length; j++) {
      if (blogsData[i].attributes.components[j].__component === componentName) {
        let data = blogsData[i].attributes.components[j]
        data.slug = slug
        blogs.push(blogsData[i].attributes.components[j]);
      }
    }
  }

  blogs = sortBlogsByPostTime(blogs);
  blogs = modifyBlogs(blogs);

  return blogs.slice(0, 3);
}

export async function GetAllCaseStudiesData(query: { [key: string]: any }, contentType: string, searchQuery: string, config?: {}) {
  const componentName = "blogs-elements.blog-content";
  if (searchQuery.length) {
    query.filters = {
      $or: [
        { title: { $containsi: searchQuery } },
        { slug: { $containsi: searchQuery } },
      ],
    }
  }
  const url = queryPopulate(query, contentType);
  console.log(searchQuery)
  console.log(url)
  const data = await fetch(url, config)
  const response = await data.json()
  let blogsData = response.data;
  let blogs: any[] = [];

  for (let i = 0; i < blogsData.length; i++) {
    const slug = blogsData[i].attributes.slug
    for (let j = 0; j < blogsData[i].attributes.components.length; j++) {
      if (blogsData[i].attributes.components[j].__component === componentName) {
        let data = blogsData[i].attributes.components[j]
        data.slug = slug
        blogs.push(blogsData[i].attributes.components[j]);
      }
    }
  }
  blogs = sortBlogsByPostTime(blogs);
  blogs = modifyBlogs(blogs);
  return blogs;
}

export async function GetAllBlogsData(query: { [key: string]: any }, contentType: string, searchQuery: string, config?: {}) {
  const componentName = "blogs-elements.blog-content";
  if (searchQuery.length) {
    query.filters = {
      $or: [
        { title: { $containsi: searchQuery } },
        { slug: { $containsi: searchQuery } },
      ],
    }
  }
  const url = queryPopulate(query, contentType);
  const data = await fetch(url, config)
  const response = await data.json()
  let blogsData = response.data;
  let blogs: any[] = [];

  for (let i = 0; i < blogsData.length; i++) {
    const slug = blogsData[i].attributes.slug
    for (let j = 0; j < blogsData[i].attributes.components.length; j++) {
      if (blogsData[i].attributes.components[j].__component === componentName) {
        let data = blogsData[i].attributes.components[j]
        data.slug = slug
        blogs.push(blogsData[i].attributes.components[j]);
      }
    }
  }
  blogs = sortBlogsByPostTime(blogs);
  blogs = modifyBlogs(blogs);
  return blogs;
}

interface Blog {
  id: number;
  postTime: string;
  content: Content[];
  [key: string]: any;
}

interface Content {
  type: string;
  [key: string]: any;
}

// Sort blogs by time
function sortBlogsByPostTime(blogs: Blog[]): Blog[] {
  return blogs.sort((a, b) => {
    const dateA = new Date(a.postTime).getTime();
    const dateB = new Date(b.postTime).getTime();
    return dateB - dateA;
  });
}

// Find first paragraph
function modifyBlogs(blogs: Blog[]): Blog[] {
  return blogs.map(blog => {
    const firstParagraph = blog.content.find(item => item.type === "paragraph");
    return {
      ...blog,
      content: firstParagraph ? [firstParagraph] : []
    };
  });
}


