# Commands

### Build an image
```bash
    docker build -t kub-first-app .
```
```bash
    minikube status
```
- If not started run
```bash
    minikube start --driver=docker 
    minikube dashboard
```
- Console
```bash
    minikube
    type: Control Plane
    host: Running
    kubelet: Running
    apiserver: Running
    kubeconfig: Configured
```

### Create deployment object

```bash
    kubectl create deployment first-app --image=kub-first-app
```
- Output should be
```bash
    deployment.apps/first-app created
```
- Check deployments
```bash
    kubectl get deployments
```
- Output
```bash
    NAME        READY   UP-TO-DATE   AVAILABLE   AGE
    first-app   0/1     1            0           38s
```
- Check Pods
```bash
    kubectl get pods
```
```bash
    NAME                         READY   STATUS         RESTARTS   AGE
    first-app-6f58f94cf5-qgk7b   0/1     ErrImagePull   0          2m5s
```
- Remove deployment (`ErrImagePull`)
```bash
    kubectl delete deployment first-app
```
- Output
```bash
    deployment.apps "first-app" deleted
```
- Create new repository in DockerHub `kub-first-app`
- Retag Docker image
```bash
    docker tag kub-first-app andriizilnyk/kub-first-app
    
    docker login
```
- Create deployment one more time using Dockerhub image
```bash
    kubectl create deployment first-app --image=andriizilnyk/kub-first-app
```
- Check deployment status
```bash
    kubectl get deployments
```
- Output
```bash
    NAME        READY   UP-TO-DATE   AVAILABLE   AGE
    first-app   1/1     1            1           29s
```
