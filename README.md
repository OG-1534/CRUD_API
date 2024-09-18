# CRUD API for Product Management

This project is a simple **CRUD (Create, Read, Update, Delete)** API built using **Node.js**, **Express.js**, and **MongoDB** with **Mongoose** for managing products in a database. The API allows users to create, retrieve, update, and delete products through a set of RESTful endpoints.

## Table of Contents
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Author](#author)

## Features
- Create a new product
- Get a list of all products
- Update an existing product
- Delete a product

Each product contains:
- **title** (String, required)
- **price** (Number, required)
- **quantity** (Number, required, min 1)
- **description** (String, required, minimum 15 characters)

## Requirements
- [Node.js](https://nodejs.org/) (v12.x or higher)
- [MongoDB](https://www.mongodb.com/)
- [npm](https://www.npmjs.com/)

## Installation
- npm init -y
- npm i express dotenv mongoose nodemon

1. Clone the repository:
   ```bash
   git clone https://github.com/OG-1534/CRUD_API.git
   cd CRUD_API