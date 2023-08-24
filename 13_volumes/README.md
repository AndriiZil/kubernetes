# Docker Compose

```bash
  docker-compose up -d --build
```
### Build an image
```bash
  docker build -t andriizilnyk/kub-data-demo .
  
  docker push andriizilnyk/kub-data-demo
```
### Apply kubernetes configuration files
```bash
  kubectl apply -f=deployment.yaml -f=service.yaml
```
- output
```bash
  deployment.apps/story-deployment created
  service/story-service created
```
### Service
```bash
  minikube service story-service
```
