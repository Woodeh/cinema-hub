const BASE_URL = 'https://studapi.teachmeskills.by';
export const FILM_URL = 'https://www.omdbapi.com/';

export const urls = {
    GET_POSTS: `${BASE_URL}/blog/posts?lesson_num=2023&limit=20&offset=20`,
    GET_POST: `${BASE_URL}/blog/posts/`,
    AUTH_USERS: `${BASE_URL}/auth/users/`,
    AUTH_USERS_ACTIVATION: `${BASE_URL}/auth/users/activation/`,
    AUTH_JWT: `${BASE_URL}/auth/jwt/create/`,
}
