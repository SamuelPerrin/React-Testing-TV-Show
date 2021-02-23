import axios from 'axios';

const fetchShow = () => {
  return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then(res => {
      console.log(res.data)
      return res.data
    });
};

export default fetchShow;