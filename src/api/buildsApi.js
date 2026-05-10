const API_URL = 'https://6a0051b12b7ab34960303d1a.mockapi.io/api/builds';

export const fetchBuilds = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Failed to fetch builds');
  }

  return response.json();
};