# Scaling

- Scale app
```bash
    kubectl scale deployment/first-app --replicas=3
```
- Output
```bash
    deployment.apps/first-app scaled
```
- Check how many pods do we have after scaling
```bash
    kubectl get pods
```
- Output
```bash
    NAME                         READY   STATUS    RESTARTS        AGE
    first-app-86b86d6fcb-776nb   1/1     Running   5 (5m36s ago)   120m
    first-app-86b86d6fcb-sj8qg   1/1     Running   0               52s
    first-app-86b86d6fcb-zssg5   1/1     Running   0               52s
```
- If type of Service is `LoadBalancer` we have available app after crashing
- Replace replicas to 1
```bash
    kubectl scale deployment/first-app --replicas=1
    
    kubectl get pods
```
- 
```bash
    NAME                         READY   STATUS        RESTARTS      AGE
    first-app-86b86d6fcb-sj8qg   1/1     Terminating   3 (61s ago)   5m31s
    first-app-86b86d6fcb-zssg5   1/1     Running       3 (76s ago)   5m31s
```
