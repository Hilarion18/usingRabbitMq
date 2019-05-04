var amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost', (err, conn) => {
  if (err) throw err
  conn.createChannel((err, ch) => {
    var ex = 'pub_sub_meetup28';

    ch.assertExchange(ex, 'fanout', {durable: false});
    ch.assertQueue('', {exclusive: true}, (err, q) => {
      console.log(` [*] waiting for message in %s. To exit press CTRL+C `, q.queue);
      ch.bindQueue(q.queue, ex, '');
      
      ch.consume(q.queue, function (msg) {
        console.log(` [X] %s`, msg.content.toString());
      }, {noAck: true})
    });
  });
})
