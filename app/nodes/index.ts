import { Position, type BuiltInNode } from "@xyflow/react";

export const initialNodes: BuiltInNode[] = [
  {
    id: "1",
    type: "input",
    data: { label: "Chicago Pile-1 (1942)" },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    position: { x: 0, y: 0 },
  },
  {
    id: "2",
    data: { label: "PWR (1954)" },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    position: { x: 200, y: -100 },
  },
  {
    id: "3",
    data: { label: "BWR (1960)" },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    position: { x: 200, y: 100 },
  },
  {
    id: "4",
    data: { label: "AP1000 (2016)" },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    position: { x: 400, y: -150 },
  },
  {
    id: "5",
    data: { label: "EPR (2007)" },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    position: { x: 400, y: -50 },
  },
  {
    id: "6",
    data: { label: "ESBWR (2014)" },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    position: { x: 400, y: 50 },
  },
  {
    id: "7",
    data: { label: "ABWR (1996)" },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    position: { x: 400, y: 150 },
  },
];
