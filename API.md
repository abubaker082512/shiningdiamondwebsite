# API Documentation

## Base URL
```
http://localhost:3000/api
```

## Endpoints

### Leads

#### GET /api/leads
Retrieve all form submissions.

**Response:**
```json
[
  {
    "id": "string",
    "name": "string",
    "email": "string",
    "phone": "string",
    "service": "string",
    "message": "string",
    "status": "new|contacted|completed",
    "createdAt": "ISO date string"
  }
]
```

#### POST /api/leads
Submit a new lead.

**Body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "service": "string",
  "message": "string"
}
```

**Response:** Created lead object

#### DELETE /api/leads/:id
Delete a lead by ID.

---

### Gallery

#### GET /api/gallery
Retrieve all gallery items.

**Response:**
```json
[
  {
    "id": "string",
    "title": "string",
    "imageUrl": "string"
  }
]
```

#### POST /api/gallery
Add a new gallery item.

**Body:**
```json
{
  "title": "string",
  "imageUrl": "string"
}
```

**Response:** Created gallery item object

#### DELETE /api/gallery/:id
Delete a gallery item by ID.

---

### Content

#### GET /api/content
Retrieve editable website content.

**Response:**
```json
{
  "hero": {
    "title": "string",
    "subtitle": "string",
    "bgImage": "string"
  },
  "about": {
    "title": "string",
    "description": "string"
  }
}
```

#### POST /api/content
Update website content.

**Body:**
```json
{
  "hero": {
    "title": "string",
    "subtitle": "string",
    "bgImage": "string"
  },
  "about": {
    "title": "string",
    "description": "string"
  }
}
```

**Response:** Updated content object

---

## Notes

- Server runs on port 3000
- In-memory storage (no database)
- Gallery is seeded with 6 Unsplash landscape images on startup
- Development mode uses Vite middleware for HMR
- Production mode serves static files from `dist/`
