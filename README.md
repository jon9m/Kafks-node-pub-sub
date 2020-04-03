
docker run --name zookeeper -p 2181:2181 zookeeper


docker run --name kafka -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=Malakas-MacBook-Pro.local:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://Malakas-MacBook-Pro.local:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluentinc/cp-kafka