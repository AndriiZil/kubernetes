# Setup Kubernetes

- Setup kubectl [Setup Documentation](https://kubernetes.io/docs/tasks/tools)
```bash
    brew install kubectl
    
    kubectl version --client
```
- Setup minikube [Setup Documentation](https://minikube.sigs.k8s.io/docs/start)
```bash
    brew install minikube
```
### Start minikube
```bash
    minikube start
```
```bash
    minikube status
```
```bash
    minikube
    type: Control Plane
    host: Running
    kubelet: Running
    apiserver: Running
    kubeconfig: Configured
```
```bash
    minikube dashboard
```
