from fastapi import APIRouter, HTTPException
from typing import List
from app.schemas.home import ProcessItem, InspectionSummary

router = APIRouter(tags=["home"])

@router.get("/home/process-list", response_model=List[ProcessItem])
async def get_process_list():
    """
    Get a list of all inspection processes.
    """
    # In a real application, this would fetch data from a database
    # For demo purposes, we're returning mock data
    processes = [
        {
            "id": 1,
            "webrtcEndpoint": None,
            "locationName": "Factory Floor A",
            "deviceName": "Camera 1",
            "status": "online",
        },
        {
            "id": 2,
            "webrtcEndpoint": None,
            "locationName": "Assembly Line B",
            "deviceName": "Camera 2",
            "status": "online",
        },
        {
            "id": 3,
            "webrtcEndpoint": None,
            "locationName": "Packaging Area C",
            "deviceName": "Camera 3",
            "status": "offline",
        },
        {
            "id": 4,
            "webrtcEndpoint": None,
            "locationName": "Quality Control D",
            "deviceName": "Camera 4",
            "status": "online",
        },
    ]
    
    return processes

@router.get("/home/inspection-summary", response_model=InspectionSummary)
async def get_inspection_summary():
    """
    Get the inspection summary data.
    """
    # In a real application, this would fetch data from a database
    # For demo purposes, we're returning mock data
    summary = {
        "totalInspection": 100,
        "passedInspection": 96,
    }
    
    return summary 