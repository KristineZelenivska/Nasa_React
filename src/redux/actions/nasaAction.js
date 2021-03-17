import Axios from 'axios'

export function getNasaData(date,cb) {
  return (dispatch) => {
    let url = `https://api.nasa.gov/planetary/apod?api_key=BmJk1VkfUuy8AYtbejScKfSfrOvBK01K2d5OWT3E&date=${date}`;
    Axios.get(url)
      .then((res) => {
        dispatch({
          type: 'GET_NASA_SUCCESS',
          payload:res.data
        });
      })
      .catch((err) => {
        dispatch({
          type: 'GET_NASA_ERROR',
        });
        cb && cb()
      });
    return dispatch({
      type: 'GET_NASA_START',
    });
  };
}



