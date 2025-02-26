from fastapi import APIRouter, HTTPException, Path
from app.schemas.process import ProcessDetail

router = APIRouter(tags=["process"])

@router.get("/process/detail/{process_id}", response_model=ProcessDetail)
async def get_process_detail(
    process_id: int = Path(..., title="The ID of the process to get", ge=1)
):
    """
    Get detailed information about a specific inspection process.
    """
    # In a real application, this would fetch data from a database
    # For demo purposes, we're returning mock data based on the ID
    
    # Mock data for different process IDs
    process_details = {
        1: {
            "id": 1,
            "locationName": "Factory Floor A",
            "deviceName": "Camera 1",
            "webrtcEndpoint": None,
            "status": "online",
            "inspectionSummary": {
                "totalInspection": 100,
                "passedInspection": 96,
            },
            "sensors": [
                {
                    "id": 1,
                    "name": "Temperature Sensor",
                    "description": "Monitors ambient temperature",
                    "status": "OK",
                },
                {
                    "id": 2,
                    "name": "Pressure Sensor",
                    "description": "Monitors system pressure",
                    "status": "OK",
                },
                {
                    "id": 3,
                    "name": "Humidity Sensor",
                    "description": "Monitors ambient humidity",
                    "status": "Not OK",
                },
                {
                    "id": 4,
                    "name": "Light Sensor",
                    "description": "Monitors ambient light levels",
                    "status": "OK",
                },
            ],
        },
        2: {
            "id": 2,
            "locationName": "Assembly Line B",
            "deviceName": "Camera 2",
            "webrtcEndpoint": None,
            "status": "online",
            "inspectionSummary": {
                "totalInspection": 85,
                "passedInspection": 82,
            },
            "sensors": [
                {
                    "id": 1,
                    "name": "Temperature Sensor",
                    "description": "Monitors ambient temperature",
                    "status": "OK",
                },
                {
                    "id": 2,
                    "name": "Pressure Sensor",
                    "description": "Monitors system pressure",
                    "status": "OK",
                },
                {
                    "id": 3,
                    "name": "Humidity Sensor",
                    "description": "Monitors ambient humidity",
                    "status": "OK",
                },
                {
                    "id": 4,
                    "name": "Light Sensor",
                    "description": "Monitors ambient light levels",
                    "status": "OK",
                },
            ],
        },
        3: {
            "id": 3,
            "locationName": "Packaging Area C",
            "deviceName": "Camera 3",
            "webrtcEndpoint": None,
            "status": "offline",
            "inspectionSummary": {
                "totalInspection": 50,
                "passedInspection": 45,
            },
            "sensors": [
                {
                    "id": 1,
                    "name": "Temperature Sensor",
                    "description": "Monitors ambient temperature",
                    "status": "Not OK",
                },
                {
                    "id": 2,
                    "name": "Pressure Sensor",
                    "description": "Monitors system pressure",
                    "status": "Not OK",
                },
                {
                    "id": 3,
                    "name": "Humidity Sensor",
                    "description": "Monitors ambient humidity",
                    "status": "Not OK",
                },
                {
                    "id": 4,
                    "name": "Light Sensor",
                    "description": "Monitors ambient light levels",
                    "status": "Not OK",
                },
            ],
        },
        4: {
            "id": 4,
            "locationName": "Quality Control D",
            "deviceName": "Camera 4",
            "webrtcEndpoint": None,
            "status": "online",
            "inspectionSummary": {
                "totalInspection": 120,
                "passedInspection": 118,
            },
            "sensors": [
                {
                    "id": 1,
                    "name": "Temperature Sensor",
                    "description": "Monitors ambient temperature",
                    "status": "OK",
                },
                {
                    "id": 2,
                    "name": "Pressure Sensor",
                    "description": "Monitors system pressure",
                    "status": "OK",
                },
                {
                    "id": 3,
                    "name": "Humidity Sensor",
                    "description": "Monitors ambient humidity",
                    "status": "OK",
                },
                {
                    "id": 4,
                    "name": "Light Sensor",
                    "description": "Monitors ambient light levels",
                    "status": "OK",
                },
            ],
        },
    }
    
    if process_id not in process_details:
        raise HTTPException(status_code=404, detail="Process not found")
    
    return process_details[process_id] 