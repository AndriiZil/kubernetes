# Single Config file

```bash
    kubectl apply -f=master-deployment.yaml
```
- Output
```bash
    service/backend created
    deployment.apps/second-app-deployment created
```
```bash
    kubectl get pods
```
- Output
```bash
    NAME                                     READY   STATUS    RESTARTS   AGE
    second-app-deployment-69b4bddc98-j7w5j   1/1     Running   0          14s
    second-app-deployment-69b4bddc98-pjfxx   1/1     Running   0          14s
    second-app-deployment-69b4bddc98-s7fml   1/1     Running   0          14s
```
```bash
    kubectl get services
```
- Output
```bash
    NAME         TYPE           CLUSTER-IP     EXTERNAL-IP   PORT(S)        AGE
    backend      LoadBalancer   10.96.60.189   <pending>     80:31758/TCP   37s
    kubernetes   ClusterIP      10.96.0.1      <none>        443/TCP        8m52s
```
```bash
    
```
- Output
```bash
    
```
```bash
    
```
- Output
```bash
    
```
```bash
    
```
- Output
```bash
    
```
