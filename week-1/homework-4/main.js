import axios from "axios";

export default async (userId) => {
  const { data: user } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const { data: posts } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  const newData = { ...user, posts };
  return newData;
};
