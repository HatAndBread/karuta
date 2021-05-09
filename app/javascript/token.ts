import axios from 'axios';

export default function () {
  const res: any = document.getElementsByName('csrf-token')[0];
  const token = res.content;
  axios.defaults.headers.common[`X-CSRF-Token`] = token;
}
