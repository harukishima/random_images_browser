import axios from 'axios';

export default axios.create({
  baseURL: 'https://proxy-server.harukishima.repl.co/proxy',
});
