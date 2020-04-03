const { Kafka } = require("kafkajs");

run();

async function run() {
  try {
    const kafka = new Kafka({
      clientId: "myapp",
      brokers: ["Malakas-MacBook-Pro.local:9092"]
    });

    const admin = kafka.admin();
    console.log("Connecting...");
    await admin.connect();
    console.log("Connected");
    await admin.createTopics({
      topics: [
        {
          topic: "Users",
          numPartitions: 2
        }
      ]
    });
    console.log("Topic created successfully");
    await admin.disconnect();
  } catch (err) {
    console.log(err);
  } finally {
    process.exit();
  }
}
