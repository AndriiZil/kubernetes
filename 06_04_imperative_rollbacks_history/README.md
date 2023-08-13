# Rollback

- 
```bash
    kubectl set image deployment/first-app kub-first-app=andriizilnyk/kub-first-app:3
```
- Output
```bash
    deployment.apps/first-app image updated
```
- Checking of rollback status
```bash
    kubectl rollout status deployment/first-app
```
- Output
```bash
    Waiting for deployment "first-app" rollout to finish: 1 old replicas are pending termination...
```
```bash
    kubectl rollout undo deployment/first-app
```
- Output
```bash
    deployment.apps/first-app rolled back
```
### Check history
```bash
    kubectl rollout history deployment/first-app
```
- Output
```bash
    REVISION  CHANGE-CAUSE
    1         <none>
    3         <none>
    4         <none>
```
- Revision
```bash
    kubectl rollout history deployment/first-app --revision=3
```
- Output
```bash
    Pod Template:
      Labels:       app=first-app
            pod-template-hash=54cdff6d69
      Containers:
       kub-first-app:
        Image:      andriizilnyk/kub-first-app:3
        Port:       <none>
        Host Port:  <none>
        Environment:        <none>
        Mounts:     <none>
      Volumes:      <none>
```
-
```bash
    kubectl rollout undo deployment/first-app --to-revision=1
```
- Output
```bash
    deployment.apps/first-app rolled back
```
- Delete
```bash
    kubectl delete service first-app
    
    kubectl delete deployment first-app
```
