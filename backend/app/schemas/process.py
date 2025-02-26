from pydantic import BaseModel
from typing import Optional, List
from app.schemas.home import InspectionSummary

class Sensor(BaseModel):
    id: int
    name: str
    description: str
    status: str

class ProcessDetail(BaseModel):
    id: int
    locationName: str
    deviceName: str
    webrtcEndpoint: Optional[str] = None
    status: str
    inspectionSummary: InspectionSummary
    sensors: List[Sensor] 