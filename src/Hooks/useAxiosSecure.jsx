import axios from 'axios'
const AxiosSecure = axios.create({
  baseURL: 'http://localhost:3000',
  // baseURL: 'https://lardix-agency-server.vercel.app',
  withCredentials: true,
});

function useAxiosSecure() {
  return AxiosSecure
}
export default useAxiosSecure