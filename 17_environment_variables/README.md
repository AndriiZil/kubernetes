# Environment Variables

- Build an image
```bash
  docker build -t andriizilnyk/kub-data-demo:2 .
  
  docker push andriizilnyk/kub-data-demo:2
```
- Apply config map
```bash
  kubectl apply -f=environment.yaml
  
  kubectl get configmap
```
- Output
```bash
  NAME               DATA   AGE
  kube-root-ca.crt   1      33d
```
- Apply deployment, service & expose service
```bash
  kubectl apply -f=deployment.yaml -f=service.yaml -f=host-pv.yaml -f=host-pvc.yaml
  
  kubectl get services
  
  minikube service story-service
```
- Output
```bash
  deployment.apps/story-deployment configured
  service/story-service configured
  persistentvolume/host-pv unchanged
  persistentvolumeclaim/host-pvc configured
```
