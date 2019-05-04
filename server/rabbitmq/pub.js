var amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost', (err, conn) => {
  conn.createChannel((err, ch) => {
    var ex = 'pub_sub_meetup28';
    var msg = process.argv.slice(2).join(' ') || 'Hello world!';

    ch.assertExchange(ex, 'fanout', {durable: false});
    ch.publish(ex, '', new Buffer(msg));
    console.log(` [X] Sent %s`, msg);
  })
  // conn.close()
  // process.exit(0)
})