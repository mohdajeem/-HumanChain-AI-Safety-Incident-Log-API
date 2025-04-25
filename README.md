#  AI Safety Incident Log API

A RESTful API service to log and manage hypothetical AI safety incidents, built as a take-home assignment for the Backend Intern role at **HumanChain AI Safety Startup**.

---

##  Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** (via Mongoose)
- **dotenv** for environment variables
- **ES6 Modules**
- **Postman** for API testing (optional)

---

##  Project Structure

incident-log-api/
├── backend/
    │
    ├── models/
    │   └── Incident.js        # Mongoose schema for incident
    │
    ├── routes/
    │   └── incidents.js       # All /incidents routes
    │
    ├── controllers/
    │   └── incidentController.js  # Logic for each route
    │
    ├── config/
    │   └── db.js              # MongoDB connection setup
    │
    ├── .env                   # For database URL
    ├── package.json
    └── server.js              # Entry point
    
 ├── .gitignore
 └── README.md              # Instructions



---

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
https://github.com/mohdajeem/HumanChain-AI-Safety-Incident-Log-API.git
cd HumanChain-AI-Safety-Incident-Log-API
```

### 2. Install Dependencies
```bash
npm install
```
### 3. Configure Environment
Create a .env file in the root of your project and add:
```bash
MONGO_URI=mongodb://localhost:27017/incident-log
PORT=5000
```
Replace MONGO_URI with your MongoDB Atlas URI if using a cloud database.

### 4. Run the Server
For regular run:
```bash
npm start
```
For development with auto-restart (requires nodemon):
```bash
npm run dev
```

### 5. Seed the Database (Optional)
To add 2–3 sample incidents:
```bash
npm run seed
```
This uses seed/seedIncidents.js to populate the database.

## API Endpoints
### 1. GET /incidents
Description: Fetch all incidents

Response: 200 OK
```bash
[
    {
        "_id": "680a7c4c7b7e0c88cf12a23a",
        "title": "Autonomous Car Misjudgment",
        "description": "AI in self-driving car failed to detect a pedestrian at night.",
        "severity": "High",
        "reported_at": "2025-04-24T18:00:44.323Z",
        "__v": 0
    },
    {
        "_id": "680a7c4c7b7e0c88cf12a23b",
        "title": "Chatbot Gave Biased Answers",
        "description": "AI chatbot gave discriminatory responses due to biased training data.",
        "severity": "Medium",
        "reported_at": "2025-04-24T18:00:44.323Z",
        "__v": 0
    },
    {
        "_id": "680a7c4c7b7e0c88cf12a23c",
        "title": "Spam Filter Blocked Critical Emails",
        "description": "An AI email filter incorrectly blocked important health updates.",
        "severity": "Low",
        "reported_at": "2025-04-24T18:00:44.324Z",
        "__v": 0
    }
]
```

### 2. POST /incidents
Description: Create a new incident

Request Body:
```bash
{
  "title": "Biased AI Hiring Tool",
  "description": "An AI recruitment tool filtered out resumes containing female-associated names, showing bias in candidate selection.",
  "severity": "Medium"
}
```
Response: 201 Created
```bash
{
  "id": "662a4ed187e3...",
  "title": "Example Title",
  "description": "Detailed explanation",
  "severity": "Medium",
  "reported_at": "2025-04-24T12:01:00Z"
}
```
Validation:

All fields required

Severity must be "Low", "Medium", or "High"

###  3. GET /incidents/:id
Description: Get a single incident by ID

Response: 200 OK
```bash
{
  "id": "662a4ed187e3...",
  "title": "Incident Title",
  "description": "Details...",
  "severity": "Low",
  "reported_at": "2025-04-24T12:00:00Z"
}
```
Error: 404 Not Found if ID does not exist

### 4. DELETE /incidents/:id
Description: Delete an incident by ID

Response: 200 OK
```bash
{
  "message": "Incident deleted successfully"
}
```
Error: 404 Not Found if ID does not exist

### Error Responses
400 Bad Request – for missing fields or invalid severity

404 Not Found – for invalid or non-existing incident ID

500 Internal Server Error – general fallback

## Sample Severity Values
Accepted values for the severity field:

### "Low"

### "Medium"

### "High"



