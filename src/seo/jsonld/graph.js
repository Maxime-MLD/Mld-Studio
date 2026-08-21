export function buildGraph(...items) {
  return {
    "@context": "https://schema.org",
    "@graph": items.flat().filter(Boolean),
  };
}

export default buildGraph;
