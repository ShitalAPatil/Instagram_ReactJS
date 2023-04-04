const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};