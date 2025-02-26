from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import home, process

app = FastAPI(
    title="Intelligent Inspection API",
    description="API for the Intelligent Inspection web application",
    version="0.1.0",
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(home.router, prefix="/api")
app.include_router(process.router, prefix="/api")

@app.get("/")
async def root():
    return {"message": "Welcome to the Intelligent Inspection API"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000) 