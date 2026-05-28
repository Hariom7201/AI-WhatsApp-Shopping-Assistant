# AI WhatsApp Shopping Assistant

An AI-powered shopping assistant for homemade food & snacks businesses using Gemini API, RAG, MongoDB, and WhatsApp integration.

## Features

* AI chatbot
* Product recommendations
* FAQ automation
* WhatsApp support
* RAG-based search
* MongoDB integration
* Modern React UI

## Tech Stack

* React.js
* Node.js
* Express.js
* MongoDB
* Gemini API
* Twilio WhatsApp API

## Installation

### Frontend

```bash
cd client
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
npm start
```

## Environment Variables

Create `.env`

```env
MONGO_URI=
GEMINI_API_KEY=
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
```

## Deployment

Frontend → Vercel

Backend → Render

User
  ↓
React Frontend
  ↓
Node.js API Server
  ↓
Gemini AI Model
  ↓
RAG Retrieval Layer
  ↓
MongoDB Database

WhatsApp User
  ↓
Twilio API
  ↓
Webhook
  ↓
Gemini AI
