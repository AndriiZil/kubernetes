# Updating Deployment

- Firstly we need to update our image
```bash
    docker build -t andriizilnyk/kub-first-app:2 .
    
    docker push andriizilnyk/kub-first-app:2
```
- Update deployment
```bash
    kubectl set image deployment/first-app kub-first-app=andriizilnyk/kub-first-app:2
```
- Output
```bash
    deployment.apps/first-app image updated
```
