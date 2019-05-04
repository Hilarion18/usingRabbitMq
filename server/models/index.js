const db = require('../util/database');

const User = require('../modules/user/models/user');

// Either pass nothing (Just DB SYNC) or Pass => true/false (determine if it should force All Table) || tableName (Will Force single Table)
syncDB();

module.exports = {
  User,
};

//
//
//
//
//
//
//
// Util Functions
function syncDB() {
  if (arguments.length > 1) throw new Error('Can\t Pass two arguments into Database Synchronization');
  const arg = arguments[0];
  let force;
  if (arguments.length < 1 || typeof arg === 'boolean') {
    force = arg;
    return syncParentDB();
  }
  const table = arguments[0];
  table.sync({ force: true, }).then(() => {
    console.log(`Table: ${table.name} synced forcefully...`);
  });

  function syncParentDB() {
    db.connection1
      .sync({
        force,
      })
      .then(() => {
        console.log(`${db.connection1.config.database} Synced` + (force ? ' Forcefully...' : '...'));
      });
  }
}
