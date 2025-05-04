# What the app looks like

![screenshot1](https://github.com/ShakilAhmedSk/easybook-appointment-system/blob/main/demo/demo.gif)
# EasyBook – Appointment Booking System

A full-stack **Appointment Booking System** built with **React + Vite + Tailwind CSS** for the frontend and **Spring Boot + MySQL** for the backend. Users can book appointments with service providers, while providers can manage their availability and bookings via a dashboard.

---

## 🚀 Features

### 👤 User
- Browse available services and providers
- Book, view, and cancel appointments
- Email/SMS notifications (optional)

### 🧑‍💼 Service Provider
- Register and list services
- Set availability and manage bookings
- View appointment calendar

### 🛠 Admin (Optional)
- Manage users and services
- View platform analytics

---

## 🧱 Tech Stack

### Frontend
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [React Hook Form](https://react-hook-form.com/)

### Backend
- [Spring Boot](https://spring.io/projects/spring-boot)
- [Spring Data JPA](https://spring.io/projects/spring-data-jpa)
- [MySQL](https://www.mysql.com/) or PostgreSQL
- [Lombok](https://projectlombok.org/)
- [Spring Security (Optional)](https://spring.io/projects/spring-security)

---

## 🗂 Project Structure

### `/frontend`
- React + Vite application
- Pages: Home, Login/Register, Booking, Dashboard
- Tailwind-based responsive UI

### `/backend`
- Spring Boot REST API
- Packages: `controller`, `service`, `model`, `repository`, `dto`, `config`
- MySQL DB schema and migrations

---

## 🔧 Setup Instructions

### 1. Clone the repo
```bash
git https://github.com/ShakilAhmedSk/easybook-appointment-system.git
cd easybook-appointment-system
