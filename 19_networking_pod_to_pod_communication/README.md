# Pod To Pod Communication

### Apply
```bash
  kubectl apply -f=auth-deployment.yaml -f=auth-service.yaml -f=users-deployment.yaml -f=users-service.yaml
```
```bash
  deployment.apps/auth-deployment created
  service/auth-service created
  deployment.apps/users-deployment created
  service/users-service created
```
### Get Services
```bash
  kubectl get services
```
- Output
```bash
  auth-service    ClusterIP      10.102.187.151   <none>        80/TCP           66s
  kubernetes      ClusterIP      10.96.0.1        <none>        443/TCP          3m38s
  users-service   LoadBalancer   10.108.143.147   <pending>     8080:31263/TCP   66s
```
- Replace `localhost` for "10.102.187.151" in `users-deployment.yaml`
```bash
   kubectl apply -f=users-deployment.yaml
   
   minikube service users-service
```
### More convenient way (`AUTH_SERVICE_SERVICE_HOST`)
- Rebuild `users-api`
```bash
  docker build -t andriizilnyk/users-demo .
  
  docker push andriizilnyk/users-demo
```
- Apply
```bash
   kubectl apply -f=users-deployment.yaml
```
### DNS Approach
```bash
  kubectl get namespaces
```
```bash
  NAME                   STATUS   AGE
  default                Active   24h
  kube-node-lease        Active   24h
  kube-public            Active   24h
  kube-system            Active   24h
  kubernetes-dashboard   Active   24h
```
- Changes in `users-deployment.yaml` to `value: "auth-service.default"`
```bash
   kubectl apply -f=users-deployment.yaml
```
