require('datejs');

function combineUsers(...args) {
  const combinedobject= {
    users:[],
    merge_date:Date.today().toString('M/d/yyyy')
  };
  for (const users of args) {
    combinedobject.users.push(...users);
  } 
  return combinedobject;
};


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};