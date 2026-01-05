# Wir nutzen das offizielle Oracle-Image für Java 25
FROM container-registry.oracle.com/java/openjdk:25

# Arbeitsverzeichnis im Container
WORKDIR /app

# Kopiere die JAR-Datei aus deinem lokalen 'target' Ordner in den Container
# Der Stern (*) sorgt dafür, dass die Version im Dateinamen egal ist
COPY target/*.jar app.jar

# Port, den Spring Boot standardmäßig nutzt
EXPOSE 8080

# Befehl zum Starten der Anwendung
ENTRYPOINT ["java", "-jar", "app.jar"]