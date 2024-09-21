import type { MetaFunction } from "@remix-run/node";

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
  return <p>Reactor Roots</p>;
}
