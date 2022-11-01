import axios from 'axios';

const getApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'c3b722c55570e9bc7df3ad457c08a917',
  },
});

export const trendingsApi = async () => {
  const { data } = await getApi.get('/trending/movie/day');
  console.log(data);
  return data;
};

export const searchApi = async params => {
  const { data } = await getApi.get('/search/movie', {
    params: params,
  });
  console.log(data);
  return data;
};

export const movieDetailsApi = async id => {
  const { data } = await getApi.get(`/movie/${id}`);
  console.log(data);
  return data;
};

export const movieCastsApi = async id => {
  const { data } = await getApi.get(`/movie/${id}/credits`);
  console.log(data);
  return data;
};

export const movieReviewApi = async id => {
  const { data } = await getApi.get(`/movie/${id}/reviews`);
  console.log(data);
  return data;
};
