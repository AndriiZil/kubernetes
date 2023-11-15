# K8S Networking (Pod Internal Communication)

### Build an image (from `users-api` folder)
```bash
  docker build -t andriizilnyk/users-demo .
  
  docker push andriizilnyk/users-demo
```
### Create deployment
```bash
  kubectl apply -f=users-deployment.yaml
```
### Create Service
```bash
  kubectl apply -f=users-service.yaml
  
  minikube service users-service
```
- Output
```bash
   🏃  Starting tunnel for service users-service.
  |-----------|---------------|-------------|------------------------|
  | NAMESPACE |     NAME      | TARGET PORT |          URL           |
  |-----------|---------------|-------------|------------------------|
  | default   | users-service |             | http://127.0.0.1:52459 |
  |-----------|---------------|-------------|------------------------|
```
- Make request from Postman to `http://127.0.0.1:52459/login`
### Build Auth image (cd auth-api)
```bash
  docker build -t andriizilnyk/auth-demo .
  
  docker push andriizilnyk/auth-demo
```
- Port in Service should not be added because we will use pod internal communication via port 80
- In Pod internal communications we have to use `localhost` as a HOST
