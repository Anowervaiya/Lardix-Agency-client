import axios from 'axios'
const AxiosSecure = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials:true
});

function useAxiosSecure() {
  return AxiosSecure
}
export default useAxiosSecure