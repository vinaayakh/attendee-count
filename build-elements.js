const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/attendee-count/runtime.js',
    './dist/attendee-count/polyfills.js',
    './dist/attendee-count/scripts.js',
    './dist/attendee-count/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/attendee-count.js');
})();