FROM openjdk:17-jdk-slim

WORKDIR /app

COPY . .

RUN sed -i 's/\r$//' gradlew

RUN chmod +x ./gradlew
RUN ./gradlew clean build -x test --stacktrace

RUN mv build/libs/backend-0.0.1-SNAPSHOT.jar /app/app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]
