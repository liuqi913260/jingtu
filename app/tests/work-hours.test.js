const assert=require('assert'); const c=require('../src/core.js'); const s=c.makeStore();
c.register(s,{account:'work@test',password:'1',name:'队员甲',school:'测试大学'});
const a=c.logWork(s,{task:'竞品调研',hours:2,note:'完成初稿'}); const b=c.logWork(s,{task:'路演稿修改',hours:1.5});
assert.equal(a.hours,2); assert.equal(c.workSummary(s).totalHours,3.5); assert.equal(c.workSummary(s).byUser[0].hours,3.5);
assert.throws(()=>c.logWork(s,{task:'',hours:2}),/有效/); assert.throws(()=>c.logWork(s,{task:'x',hours:25}),/有效/);
console.log('Work hours: PASS');
