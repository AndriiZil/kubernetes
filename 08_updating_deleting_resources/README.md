# Updating and deleting resources (Deployment & Service)

### Update
- In order to update deployment (replica changes, image changes) just run command:
```bash
    kubectl apply -f=deployment.yaml
```
### Delete resources
- Output
```bash
    kubectl delete -f=deployment.yaml -f=service.yaml
    
    kubectl delete -f=deployment.yaml,service.yaml
```
- Remove all resource in one command
```bash
    kubectl delete all --all
```
- Output
```bash
    pod "second-app-deployment-5bb6497cd8-h4pps" deleted
    pod "second-app-deployment-5bb6497cd8-lglfb" deleted
    pod "second-app-deployment-5bb6497cd8-xqzgf" deleted
    service "backend" deleted
    service "kubernetes" deleted
```
