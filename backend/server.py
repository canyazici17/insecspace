from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone
import zoneinfo


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection (use safe defaults for local development)
mongo_url = os.environ.get('MONGO_URL', 'mongodb+srv://ayazicibgd_db_user:ali133297CN@cluster0.x7d95ud.mongodb.net/insecspace?retryWrites=true&w=majority')
client = AsyncIOMotorClient(mongo_url)
db_name = os.environ.get('DB_NAME', 'insecspace_db')
db = client[db_name]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str



class Registration(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    surname: str
    email: str
    phone: str
    title: str
    organization: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(zoneinfo.ZoneInfo("Europe/Istanbul")))



class RegistrationCreate(BaseModel):
    name: str
    surname: str
    email: str
    phone: str
    title: str
    organization: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj



@api_router.post("/register", response_model=Registration)
async def create_registration(input: RegistrationCreate):
    """Create a registration record in MongoDB.

    Expects JSON body with: name, surname, email, phone, title, organization
    """
    reg_dict = input.model_dump()
    # logging removed
    reg_obj = Registration(**reg_dict)

    # Prepare document for MongoDB (serialize timestamp)
    doc = reg_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    # logging removed

    collection_name = os.environ.get('REG_COLLECTION', 'registrations')
    _ = await db[collection_name].insert_one(doc)
    return reg_obj


@api_router.get("/registrations", response_model=List[Registration])
async def list_registrations():
    """List registrations (for local verification). Excludes MongoDB _id field."""
    collection_name = os.environ.get('REG_COLLECTION', 'registrations')
    regs = await db[collection_name].find({}, {"_id": 0}).to_list(1000)
    # Convert timestamp strings back to datetimes if necessary
    for r in regs:
        if isinstance(r.get('timestamp'), str):
            try:
                r['timestamp'] = datetime.fromisoformat(r['timestamp'])
            except Exception:
                pass
    return regs

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()