#!/usr/bin/env bash
export DATE=$(date +%s)

envsubst < config.yml > k8s-configmap.yml
envsubst < main.yml > k8s-main.yml

if [[ "${MODE}" == "deploy" ]]; then
    kubectl apply --force -f k8s-configmap.yml
    kubectl apply --force -f k8s-main.yml
    cat k8s-configmap.yml
    cat k8s-main.yml
    kubectl rollout status deployments/"${SERVICE_NAME}"
    if [[ $? != 0 ]]; then
        POD_ID=$(kubectl get pods --sort-by=.metadata.creationTimestamp | grep "${SERVICE_NAME}" | awk '{print $1}' | tac | head -1 )
        echo "===> DESCRIPTION FOR POD ID $POD_ID"
        kubectl describe pod "$POD_ID"
        echo "===> LOGS FOR POD ID $POD_ID"
        kubectl logs "$POD_ID" --tail=20 && exit 1;
    fi
else
    kubectl apply -f k8s-configmap.yml --dry-run
    kubectl apply -f k8s-main.yml --dry-run
fi
