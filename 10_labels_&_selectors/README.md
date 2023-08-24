# Labels & Selectors

### Apply deployment & Service
```bash
    kubectl apply -f=deployment.yaml
    
    kubectl apply -f service.yaml
    
    minikube service backend
```
### Delete by labels
```bash
  kubectl delete deployments,services -l group=example
```
