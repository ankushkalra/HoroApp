import axios from 'axios';
import moment from 'moment';

const ROOT_URL = 'http://192.168.1.5:5000';

const getData = sign => {
  const dateString = moment()
    .startOf('day')
    .toISOString();

  return axios({
    method: 'get',
    url: `${ROOT_URL}/horo?sign=${sign}&date=${dateString}`,
  });
};

export default {getData};
