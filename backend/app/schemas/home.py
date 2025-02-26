from pydantic import BaseModel
from typing import Optional, List

class ProcessItem(BaseModel):
    id: int
    webrtcEndpoint: Optional[str] = None
    locationName: str
    deviceName: str
    status: str

class InspectionSummary(BaseModel):
    totalInspection: int
    passedInspection: int 