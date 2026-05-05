import { flowClusters } from "@/data/flows";

export function getFlowClusterById(clusterId: string) {
  return flowClusters.find((cluster) => cluster.id === clusterId);
}

export function getMoveFlowClusters(moveId: string) {
  return flowClusters.filter((cluster) =>
    cluster.nodes.some((node) => node.moveIds.includes(moveId)),
  );
}

export function moveBelongsToFlowCluster(moveId: string, clusterId: string) {
  const cluster = getFlowClusterById(clusterId);

  if (!cluster) {
    return false;
  }

  return cluster.nodes.some((node) => node.moveIds.includes(moveId));
}
