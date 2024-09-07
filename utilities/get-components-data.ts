import { queryPopulate } from "./query-populate"

export async function GetData(query: {}, contentType: string, isr?: {}) {
  const url = queryPopulate(query, contentType)
  const data = await fetch(url, isr)
  const response = await data.json()
  let components = response.data.attributes.components
  for (let i = 0; i < components.length; i++) {
    const name = components[i].__component
    const componentName = name.split(".")[1]
    components[i].__component = componentName
  }
  return response
}

export async function GetCaseStudiesData(query: {}, contentType: string) {
  const componentName = "blogs-elements.blog-content";
  const url = queryPopulate(query, contentType);
  const response = await axios.get(url);
  let blogsData = response.data.data;
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

export async function GetBlogsData(query: {}, contentType: string) {
  const componentName = "blogs-elements.blog-content";
  const url = queryPopulate(query, contentType);
  const response = await axios.get(url);
  let blogsData = response.data.data;
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

export async function GetAllCaseStudiesData(query: {}, contentType: string) {
  const componentName = "blogs-elements.blog-content";
  const url = queryPopulate(query, contentType);
  const response = await axios.get(url);
  let blogsData = response.data.data;
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

export async function GetAllBlogsData(query: {}, contentType: string) {
  const componentName = "blogs-elements.blog-content";
  const url = queryPopulate(query, contentType);
  const response = await axios.get(url);
  let blogsData = response.data.data;
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


