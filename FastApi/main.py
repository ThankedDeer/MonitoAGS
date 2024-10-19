from fastapi import FastAPI
from pydantic import BaseModel
import requests



app = FastAPI()

# Endpoint de la API externa
external_url = "https://rohls-nqaaa-aaaan-qznfq-cai.raw.icp0.io/post"
url2 = "https://rohls-nqaaa-aaaan-qznfq-cai.raw.icp0.io/read"


# Definir el modelo de los datos
class PostData(BaseModel):
    id: str
    value: str

@app.get('/')
async def root():
    return {'example': 'This is an example ', 'data': 'IT WORKS! XD'}

@app.post("/post")
def consume_api(data: PostData):
    # El payload que se enviará a la API externa
    payload = {
        "id": data.id,
        "value": data.value
    }
    # Realizar la solicitud POST a la API externa
    response = requests.post(external_url, json=payload)

    # Verificar el estado de la respuesta
    if response.status_code == 200:
        return {"message": "Solicitud exitosa", "data": response.json()}
    else:
        return {"message": "Error en la solicitud", "status_code": response.status_code}

@app.get("/read")
def read_api():
    
    response = requests.get(url2)
    
    if response.status_code == 200:
        return response.json()  # Retorna el JSON recibido de la API externa
    else:
        raise HTTPException(status_code=response.status_code, detail=response.text)
