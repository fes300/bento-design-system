export function findChildByName<T extends NodeType>(
  n: ComponentNode,
  name: string,
  nodeType?: T
): Extract<SceneNode, { type: T }> {
  const child = n.findOne((c) => c.name === name);

  if (!child) {
    throw new Error("Could not found child node named " + name);
  }

  if (nodeType && child.type !== nodeType) {
    throw new Error(
      `Child node named ${name} does not match the expected type.\nExpected: ${nodeType}\nActual: ${child.type}`
    );
  }

  return child as Extract<SceneNode, { type: T }>;
}
