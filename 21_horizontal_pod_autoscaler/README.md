# Horizontal Pod Autoscaler

![Link_1](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough/)
![Link_2](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/)

## K8S
- First we need to deploy metrics server
```bash
   kubectl apply -f k8s/0-metric-server.yaml
   
   kubectl apply -f k8s/1-deployment.yaml
   
   kubectl apply -f k8s/2-deployment.yaml
```
[Metrics-Server](https://github.com/antonputra/tutorials/tree/main/lessons/071)

- Apply deployment, service, autoscaler
```bash
  kubectl apply -f nginx-with-hpa.yaml
  kubectl apply -f php-apache.yaml
  
  minikube service nginx-service
  minikube service php-apache
  
  kubectl get hpa
```

```bash
  kubectl get services
```

```bash
  kubectl apply -f apache-test.yaml
  
  kubectl autoscale deployment php-apache --cpu-percent=50 --min=1 --max=10
```