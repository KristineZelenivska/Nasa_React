import { createBrowserHistory } from 'history';

let history = {};
if (process.env.NODE_ENV !== 'test') {
  history = createBrowserHistory();
}

export default history;
