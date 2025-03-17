# express-postgres-pg
Step 1: Pull the PostgreSQL and pgAdmin Images
podman pull docker.io/library/postgres:latest
podman pull docker.io/dpage/pgadmin4:latest

Step 2: Create a Pod (Optional)

podman pod create --name pg_pod -p 5432:5432 -p 8080:80

Step 3: Run PostgreSQL Container

podman run -d \
  --pod pg_pod \
  --name postgres_db \
  -e POSTGRES_USER=admin \
  -e POSTGRES_PASSWORD=admin123 \
  -e POSTGRES_DB=mydatabase \
  -v pg_data:/var/lib/postgresql/data \
  docker.io/library/postgres:latest

----------------------------------------
POSTGRES_USER=admin: Username for PostgreSQL
POSTGRES_PASSWORD=admin123: Password
POSTGRES_DB=mydatabase: Default database
-v pg_data:/var/lib/postgresql/data: Persistent storage

------------------------------------------------

Step 4: Run pgAdmin Container


podman run -d \
  --pod pg_pod \
  --name pgadmin \
  -e PGADMIN_DEFAULT_EMAIL=admin@example.com \
  -e PGADMIN_DEFAULT_PASSWORD=admin123 \
  -v pgadmin_data:/var/lib/pgadmin \
  docker.io/dpage/pgadmin4

---------------------------

PGADMIN_DEFAULT_EMAIL=admin@example.com
PGADMIN_DEFAULT_PASSWORD=admin123
----------------------------

Step 5: Access pgAdmin

Open http://localhost:8080 in your browser.
Login with:
Email: admin@example.com
Password: admin123
Add a new server:
Host: localhost
Port: 5432
User: admin
Password: admin123


Step 6: Verify PostgreSQL

podman exec -it postgres_db psql -U admin -d mydatabase

Run SQL query:

SELECT version();


Step 7: Persistent Storage (Optional)


podman volume create pg_data
podman volume create pgadmin_data



