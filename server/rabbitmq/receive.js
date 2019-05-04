var amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost', (err, conn) => {
  if (err) throw err;
  conn.createChannel((err, ch) => {
    if (err) throw err;
    var queue = `FirstQueue`

    ch.assertQueue(queue, {durable: false});
    ch.prefetch(1);
    console.log(`[*] Waiting for message in $%s. To exit press CTRL+C`, queue);
    ch.consume(queue, (msg) => {
      console.log(`Received ${msg.content}`);
    }), {noAck: true}
  })
  // conn.close()
  // process.exit(0)
})