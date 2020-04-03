const { Kafka } = require("kafkajs");

const msg = process.argv[2];

run();

async function run() {
  try {
    const kafka = new Kafka({
      clientId: "myapp",
      brokers: ["Malakas-MacBook-Pro.local:9092"]
    });

    const producer = kafka.producer();
    console.log("Producer Connecting...");
    await producer.connect();
    console.log("Producer Connected");

    //A-M partition 0, N-Z partition 1
    const partition = msg[0] < "n" ? 0 : 1;

    const result = await producer.send({
      topic: "Users",
      messages: [
        {
          value: msg,
          partition: partition
        }
      ]
    });

    console.log(`Send successfully ${JSON.stringify(result)}`);

    await producer.disconnect();
  } catch (err) {
    console.log(err);
  } finally {
    process.exit();
  }
}
