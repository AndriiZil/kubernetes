# Configurations

```bash
  docker build -t andriizilnyk/kub-first-app:2 .
  
  docker push andriizilnyk/kub-first-app:2
```
### Start containers
```bash
  kubectl apply -f=deployment.yaml
  
  kubectl apply -f=service.yaml
  
  minikube service backend
```
