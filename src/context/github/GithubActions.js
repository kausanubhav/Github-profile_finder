import axios from "axios";
const GITHUB_URL = process.env.REACT_APP_URL;
const GITHUB_TOKEN = process.env.REACT_APP_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

//Get search results
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  const response=await github.get(`/search/users?${params}`);
  return response.data.items;
};

//Get users and repos
export const getUserAndRepos=async (login)=>{
//to make 2 requests, promise.all is used
const [user,repos]=await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
])

return {user:user.data,repos:repos.data}
}