# Services

### Create Service
```bash
    kubectl expose deployment first-app --type=LoadBalancer --port=8080
```
- Output
```bash
    service/first-app exposed
```
```bash
    kubectl get services
```
```bash
    NAME         TYPE           CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
    first-app    LoadBalancer   10.104.225.58   <pending>     8080:30528/TCP   39s
    kubernetes   ClusterIP      10.96.0.1       <none>        443/TCP          149m
```
```bash
    minikube service first-app
```
- Output
```bash
    |-----------|-----------|-------------|---------------------------|
    | NAMESPACE |   NAME    | TARGET PORT |            URL            |
    |-----------|-----------|-------------|---------------------------|
    | default   | first-app |        8080 | http://192.168.49.2:30528 |
    |-----------|-----------|-------------|---------------------------|
    🏃  Starting tunnel for service first-app.
    |-----------|-----------|-------------|------------------------|
    | NAMESPACE |   NAME    | TARGET PORT |          URL           |
    |-----------|-----------|-------------|------------------------|
    | default   | first-app |             | http://127.0.0.1:63180 |
    |-----------|-----------|-------------|------------------------|
```
