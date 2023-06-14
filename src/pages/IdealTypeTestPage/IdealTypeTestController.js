import axios from 'axios';

export const getRandomIdealPhoto = async () => {
  try {
    const response = await axios.get(
      'https://jin749.site:60101/getRandomImages/f/9'
    );
    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};
