# Volume emtryDir (attached to the Pod and Pod lifecycle)

- Works good only with `replica: 1`

### Build an image
```bash
  docker build -t andriizilnyk/kub-data-demo:1 .
  
  docker push andriizilnyk/kub-data-demo:1
```
### Apply kubernetes configuration files
```bash
  kubectl apply -f=deployment.yaml -f=service.yaml
```
- output
```bash
  deployment.apps/story-deployment created
  service/story-service created
```
### Service
```bash
  minikube service story-service
```
