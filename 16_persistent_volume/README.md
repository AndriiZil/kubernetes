# Persistent Volume (Independent Volumes, independent from the Node & Pods)
- This kind of volumes is a standalone Cluster resource (Not attached to a Pod)
- Created standalone, claimed via a PVC
- Can be defined once and used multiple times

### Get storage classes
```bash
  kubectl get sc
```
- Output
```bash
  NAME                 PROVISIONER                RECLAIMPOLICY   VOLUMEBINDINGMODE   ALLOWVOLUMEEXPANSION   AGE
  standard (default)   k8s.io/minikube-hostpath   Delete          Immediate           false                  33d 
```
- Apply volumes
```bash
   kubectl apply -f=host-pv.yaml
   
   kubectl apply -f=host-pvc.yaml
   
   kubectl apply -f=deployment.yaml
```
- Output
```bash
   persistentvolume/host-pv created
   
   persistentvolumeclaim/host-pvc created
   
   deployment.apps/story-deployment configured
```
- List all persistent volumes
```bash
  kubectl get pv 
```
- Output
```bash
  NAME      CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM              STORAGECLASS   REASON   AGE
  host-pv   1Gi        RWO            Retain           Bound    default/host-pvc   standard                94s
```

```bash
  kubectl get pvc
```
- Output
```bash
  NAME       STATUS   VOLUME    CAPACITY   ACCESS MODES   STORAGECLASS   AGE
  host-pvc   Bound    host-pv   1Gi        RWO            standard       2m19s
```

- Service deployment
```bash
  kubectl apply -f=service.yaml
```
- Output
```bash
  service/story-service unchanged
```
- Get Services & expose
```bash
  kubectl get services
  
  minikube service story-service
```
- Output
```bash
  NAME            TYPE           CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE
  kubernetes      ClusterIP      10.96.0.1       <none>        443/TCP        23d
  story-service   LoadBalancer   10.108.18.193   <pending>     80:31282/TCP   23d
```
