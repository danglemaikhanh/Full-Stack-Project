# Employee Manager - Full Stack Project

A learning project to understand Spring Boot and Angular integration. This is a simple employee management application with a Spring Boot backend and Angular frontend.

## Project Structure

```
Full-Stack-Project/
├── employeemanager-be/          # Spring Boot Backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/            # Java source code
│   │   │   └── resources/       # Application configuration
│   │   └── test/                # Unit tests
│   ├── pom.xml                  # Maven configuration
│   └── Dockerfile               # Docker configuration
│
├── employeemanager-fe/          # Angular Frontend
│   ├── src/
│   │   ├── app/                 # Angular components and services
│   │   ├── assets/              # Static assets
│   │   └── environments/        # Environment configurations
│   ├── package.json             # npm dependencies
│   └── angular.json             # Angular configuration
│
└── docker-compose.yml           # Docker Compose for orchestration
```

## Backend (Spring Boot)

Located in `employeemanager-be/`

### Features

- RESTful API for employee management
- Employee CRUD operations
- Exception handling
- JPA/Hibernate for database operations

### Running the Backend

```bash
cd employeemanager-be
mvn spring-boot:run
```

The backend will run on `http://localhost:8080`

## Frontend (Angular)

Located in `employeemanager-fe/`

### Features

- Employee list display
- Create, read, update, delete operations
- Navigation and UI components
- HTTP service for API communication

### Running the Frontend

```bash
cd employeemanager-fe
npm install
ng serve
```

The frontend will run on `http://localhost:4200`

## Running with Docker Compose

To run the database and backend with Docker:

```bash
docker-compose up
```

The backend will be available at `http://localhost:8080`

**Note:** The frontend must be run separately using `ng serve` as described above.

## Environment Configuration

Configure database environment variables in `employeemanager-be/src/main/resources/application.properties` for the backend and environment configurations in `employeemanager-fe/src/environments/` for the frontend as needed.

## Development Notes

This is an **Übung** (exercise) project for learning purposes. It demonstrates:

- Spring Boot application structure
- RESTful API design
- Angular component architecture
- Frontend-backend communication
- Docker containerization
