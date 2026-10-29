const assert = require('assert');
const fs = require('fs');
const css = fs.readFileSync('styles.css','utf8');
assert.ok(css.includes('backdrop-filter: blur'), 'glass navigation/header styles');
assert.ok(css.includes('radial-gradient'), 'page background treatment');
assert.ok(css.includes('.event-card:hover'), 'interactive card hover');
assert.ok(css.includes('focus-visible'), 'keyboard focus treatment');
assert.ok(css.includes('linear-gradient(135deg'), 'primary action visual hierarchy');
console.log('Page design: PASS');
