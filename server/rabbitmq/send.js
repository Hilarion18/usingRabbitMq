var amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost', (err, conn) => {
  if (err) throw err;
  conn.createChannel((err,ch) => {
    if (err) throw err;
    var queue = 'FirstQueue';
    var msg = { type: '2', content: 'Woyo'};

    ch.assertQueue(queue, {durable: false});
    ch.sendToQueue(queue, Buffer.from(JSON.stringify(msg)), {
      persistent: true
    });
    console.log(` [X] Sent %s`, msg);
  });
  // setTimeout(() => {
  //   conn.close();
  //   process.exit(0); 
  // }, 500);
})