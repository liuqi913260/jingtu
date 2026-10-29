const assert=require('assert');const js=require('fs').readFileSync('app.js','utf8');const core=require('../src/core.js');
for(const name of ['workLogModal','defenseModal','defenseRoom','profileModal','backupModal'])assert.ok(js.includes('function '+name),'missing UI '+name);
for(const name of ['logWork','workSummary','createDefenseSession','addAdvisor','addReview','awardPoints','addCalendarItem','setTeamPreference','saveDocumentVersion','setModeration','addMaterial'])assert.equal(typeof core[name],'function','missing API '+name);
console.log('Feature entrypoints: PASS');
