#!/bin/bash

# Insert tupla 1
curl --header "Content-Type: application/json"   --request POST   --data '{
   "title":"tarea1",
   "description":"Entrega calculo diferencial",
   "status":"pending",
   "tags":[
      {
         "priority":"Prioridad Alta",
         "taskType":"Entrega especial"
      }
   ]
}'   http://localhost:3000/tasks

curl --header "Content-Type: application/json"   --request POST   --data '{
   "title":"tarea2",
   "description":"Inscribirme al final de Ayda 1",
   "status":"pending",
   "tags":[
      {
         "priority":"Prioridad baja",
         "taskType":"Tipo normal"
      }
   ]
}'   http://localhost:3000/tasks

# Muestra los datos de la tarea 1
curl --header "Content-Type: application/json"   --request GET http://localhost:3000/tasks/NAME

# Actualiza la tarea 1 y le cambia el status a done
curl --header "Content-Type: application/json"   --request PUT   --data '{
   "status":"Done"
}'   http://localhost:3000/tasks/tarea1

#Agrega actualiza la tarea2 y hace multipes cambios a los atributos.
curl --header "Content-Type: application/json"   --request PUT   --data '{
   "title":"TituloCambiado",
   "description":"Nueva descripcion",
   "status":"done",
   "tags":[
      {
         "priority":"Prioridad alta",
         "taskType":"Tarea de facultad"
      }
   ]
}'   http://localhost:3000/tasks/tarea2

# Borramos la tarea2 que ahora tiene el titulo TituloCambiado
curl --header "Content-Type: application/json"   --request DELETE http://localhost:3000/tasks/TituloCambiado

