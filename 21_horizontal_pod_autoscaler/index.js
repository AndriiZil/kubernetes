'use strict';

const axios = require('axios');

(async () => {
  try {
    const requests = [];

    for (let i = 0; i < 100000; i++) {
      requests.push(axios.get('http://127.0.0.1:61532'));
    }

    await Promise.allSettled(requests);

  } catch (err) {
    console.error(err);
  }
})();
