# Networking with frontend

### Deploy services & deployment
```bash
  kubectl apply -f=auth-deployment.yaml -f=auth-service.yaml \
  -f=users-deployment.yaml -f=users-service.yaml \
  -f=tasks-deployment.yaml -f=tasks-service.yaml
  
  minikube service tasks-service users-service
```
### Rebuild `tasks-api`
```bash
  docker build -t andriizilnyk/tasks-demo .
  
  docker push andriizilnyk/tasks-demo:latest
```

### Build frontend container (`cd frontend`)
```bash
  docker build -t andriizilnyk/front-demo .

  docker push andriizilnyk/front-demo:latest
```
- In order to check locally (run frontend container)
```bash
  docker run -p 80:80 --rm -d andriizilnyk/front-demo
```
- If redeploy (any deployment), from kubernetes folder where yaml files are located
```bash
  kubectl delete -f=frontend-deployment.yaml
  
  kubectl apply -f=frontend-deployment.yaml
```

### Frontend deployment
```bash
  kubectl apply -f=frontend-deployment.yaml -f=frontend-service.yaml
```
- Expose Service for frontend
```bash
   minikube service frontend-service
```
### IP Address replacing in frontend app (reverse proxy)
- In `20_networking_frontend/frontend/conf/nginx.conf` replace for tasks service domain name
```bash
  location /api/ {
    proxy_pass http://tasks-service.default:8000/;
  }
```
