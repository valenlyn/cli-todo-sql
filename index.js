console.log("works!!", process.argv[2]);

const input = process.argv[3];

const pg = require('pg');

const configs = {
    user: 'valenlyn',
    host: '127.0.0.1',
    database: 'todo',
    port: 5432,
};

const client = new pg.Client(configs);

let queryDoneCallback = (err, result) => {
    if (err) {
      console.log("query error", err.message);
    } else {
      console.log("result", result.rows );
    }
};

let clientConnectionCallback = (err) => {

  if( err ){
    console.log( "error", err.message );
  }

  //==================================================//
  //                 ADD NEW ITEM

    if (process.argv[2] === "add") {

        let text = `INSERT INTO todoItems (item, done) VALUES ('${input}', false)`;
        client.query(text, queryDoneCallback);
    }

  // let text = "SELECT * FROM todoItems";

  // const values = ["hello"];


};

client.connect(clientConnectionCallback);