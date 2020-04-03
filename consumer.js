const { Kafka } = require("kafkajs");

const msg = process.argv[2];

run();

async function run() {
  try {
    const kafka = new Kafka({
      clientId: "myapp",
      brokers: ["Malakas-MacBook-Pro.local:9092"]
    });

    const consumer = kafka.consumer({
      groupId: "test"
    });
    console.log("Consumer Connecting...");
    await consumer.connect();
    console.log("Consumer Connected");

    await consumer.subscribe({
      topic: "Users",
      fromBeginning: true
    });

    await consumer.run({
      eachMessage: async result => {
        // console.log(`Consumed successfully ${JSON.stringify(result)}`);
        console.log(`${result.message.value} on partition ${result.partition}`);
    }
    });

    // await consumer.disconnect();  //keep running
  } catch (err) {
    console.log(err);
  } finally {
    
  }
}
