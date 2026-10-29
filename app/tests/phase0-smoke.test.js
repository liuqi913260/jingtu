const fs = require('fs');
const assert = require('assert');
assert.ok(fs.existsSync('index.html'));
assert.ok(fs.existsSync('styles.css'));
assert.ok(fs.existsSync('app.js'));
assert.ok(fs.existsSync('PRD.md'));
assert.ok(fs.existsSync('DEVELOPMENT_PLAN.md'));
console.log('Phase 0 smoke: PASS');
