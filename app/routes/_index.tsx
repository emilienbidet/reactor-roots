import { useCallback } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { initialNodes } from "@/nodes";
import type { MetaFunction } from "@remix-run/node";
import { initialEdges } from "@/edges";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Reactor Roots",
    },
    {
      name: "description",
      content:
        "Explore the evolution of nuclear reactors with Reactor Roots, an interactive timeline tracing key designs and innovations by country and reactor type.",
    },
  ];
};

export default function Index() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  return (
    <div style={{ width: "100%", height: "100dvh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        snapToGrid
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
