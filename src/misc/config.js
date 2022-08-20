const ABU = 'https://api.tvmaze.com';

export async function apiGet(queryString) {
  const response = fetch(`${ABU}${queryString}`).then(r => r.json());
  return response;
}
