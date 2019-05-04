var amqp = require('amqplib/callback_api')

function sendQueue(body) {
  amqp.connect('amqp://localhost', (err, conn) => {
    if (err) throw err;
    conn.createChannel((err,ch) => {
      if (err) throw err;
      var queue = 'FirstQueue';
      // console.log(`===== req.body`, req.body);
      
      var payload = body;
  
      ch.assertQueue(queue, {durable: false});
      ch.sendToQueue(queue, Buffer.from(JSON.stringify(payload)), {
        persistent: true
      });
      console.log(` [X] Sent %s`, payload);
    });
  })
}

function receiveQueue() {
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
  })
}

function subQueue(body) {
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
}

function pubQueue(body) {
  amqp.connect('amqp://localhost', (err, conn) => {
  conn.createChannel((err, ch) => {
    var ex = 'pub_sub_meetup28';
    var msg = process.argv.slice(2).join(' ') || 'Hello world!';

    ch.assertExchange(ex, 'fanout', {durable: false});
    ch.publish(ex, '', new Buffer(msg));
    console.log(` [X] Sent %s`, msg);
  })
  })
}



module.exports = {
  sendQueue,
  receiveQueue,
  subQueue,
  pubQueue
}