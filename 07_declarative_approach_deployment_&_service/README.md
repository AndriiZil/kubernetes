# Declarative Approach (Creating Deployment & Service)

- [API Version](https://kubernetes.io/docs/concepts/workloads/controllers/deployment)
- [Kubernetes API](https://kubernetes.io/docs/reference/kubernetes-api)

### Apply configuration file
```bash
    kubectl apply -f=deployment.yaml
```
- Output
```bash
    deployment.apps/second-app-deployment created
```
```bash
    kubectl get pods
```
- Output
```bash
    NAME                                     READY   STATUS    RESTARTS   AGE
    second-app-deployment-5bb6497cd8-jv58n   1/1     Running   0          25s
    second-app-deployment-5bb6497cd8-msczr   1/1     Running   0          25s
    second-app-deployment-5bb6497cd8-srn44   1/1     Running   0          25s
```
```bash
    kubectl apply -f service.yaml
```
- Output
```bash
    service/backend created
```
```bash
    kubectl get services
```
- Output
```bash
    NAME         TYPE           CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE
    backend      LoadBalancer   10.104.72.248   <pending>     80:30690/TCP   22s
    kubernetes   ClusterIP      10.96.0.1       <none>        443/TCP        25h
```
```bash
    minikube service backend
```
