import axios from 'axios'
export const $http = async function(url){
 const res = axios.get(url)
 return res
}