---
title: "Building Your Place — A Full-Stack Social Platform"
date: "2025-05"
excerpt: "Lessons learned from building a full-stack social platform with React, Express, MongoDB, and deploying to production."
---

**Your Place** is a full-stack social platform where users share and discover places through personal experiences. Here's what went into building it.

## Tech Stack

- **Frontend:** ReactJS
- **Backend:** Node.js, ExpressJS
- **Database:** MongoDB with Mongoose
- **Auth:** JWT-based authentication

## Architecture

The REST API is organized into routes, controllers, and models. Each resource (users, places, experiences) has its own router with CRUD endpoints.

Key design decisions:
- Mongoose schemas with references for relational data
- Middleware-based auth protection
- Image uploads handled via cloud storage

## What I Learned

Building a full-stack app end-to-end taught me more than any tutorial. Debugging across the frontend-backend boundary, managing state on the client, and handling real-world edge cases were invaluable.

Deploying the app and managing it in production gave me hands-on experience with cloud infrastructure and monitoring.
