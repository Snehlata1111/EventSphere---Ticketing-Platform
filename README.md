# EventSphere

EventSphere is an event ticket management platform built with Spring Boot and React. It allows organizers to create events and sell tickets, event goers to purchase tickets, and staff to scan ticket QR codes at events.

Customized and adapted by Snehlata.

The backend is built with Spring Boot and the frontend is built with React and Vite. Authentication is handled using Keycloak, with PostgreSQL used for data storage.

## Features

- Event creation and management
- Ticket creation and purchasing
- QR code based ticket validation
- Organizer and event goer workflows
- Staff ticket scanning
- Keycloak authentication
- Spring Boot REST APIs
- React frontend
- PostgreSQL database
- Docker based local development environment

## Tech Stack

### Backend
- Java 21
- Spring Boot 3.4.4
- Spring Data JPA
- PostgreSQL
- Keycloak
- Docker

### Frontend
- React
- Vite
- JavaScript
- HTML
- CSS

## Project Structure

| Directory | Contents |
|-----------|----------|
| `backend/` | Spring Boot backend |
| `frontend/` | React frontend |
| `docs/` | Original build guide and project documentation |

## Running the Project

You'll need:

- JDK 21
- Node.js 20 or later
- Docker

### Start the Backend

```bash
cd backend
docker compose up -d
./mvnw spring-boot:run