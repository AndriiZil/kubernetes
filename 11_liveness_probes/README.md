# Liveness Probes

### Deploy resources
```bash
  kubectl apply -f=deployment.yaml
  
  kubectl apply -f=service.yaml
```
- Output
```bash
   deployment.apps/second-app-deployment created
   
   service/backend created
```
- Expose
```bash
  minikube service backend 
```
