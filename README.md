# Kubernetes (K8S)

1. [Setup](01_setup/README.md)
2. [Imperative Approach Development](02_imperative_approach_deployment/README.md)
3. [Imperative Approach Service](03_imperative_approach_services/README.md)
4. [Imperative Approach Scaling](04_imperative_approach_scaling/README.md)
5. [Imperative Approach Updating Deployment](05_imperative_updating_deployment/README.md)
6. [Imperative Approach Rollbacks & History](06_imperative_rollbacks_history/README.md)
7. [Declarative Approach Deployment & Service](07_declarative_approach_deployment_&_service/README.md)
8. [Updating & Deleting Resources](08_updating_deleting_resources/README.md)
9. [Single config file](09_single_config_file/README.md)
10. [Labels & Selectors](10_labels_&_selectors/README.md)
11. [Liveness Probes](11_liveness_probes/README.md)
12. [Configuration Options](12_configuration_options/README.md)
13. [Volumes](13_volumes/README.md)
14. [Volume emptyDir](14_volume_emptyDir/README.md)
15. [Volume hostPath](15_volume_hostPath/README.md)
16. [Persistent Volume](16_persistent_volume/README.md)
17. [Environment Variables](17_environment_variables/README.md)
18. [Networking Pod Internal Communication](18_networking_pod_internal_communication/README.md)
19. [Networking Pod To Pod Communication](19_networking_pod_to_pod_communication/README.md)
20. [Networking with frontend](20_networking_frontend/README.md)

### Start minikube & check status, run dashboard
```bash
  minikube start
  
  minikube status
  
  minikube dashboard
```

### Get deployments
```bash
  kubectl get deployments
```
### Get Services
```bash
  kubectl get services
```
### Get Pods
```bash
  kubectl get pods
```
### Get logs by the specific pod
```bash
  kubectl logs tasks-deployment-6cc8fff7ff-96bzt
```

### Remove all resources
```bash
  kubectl delete all --all
```
