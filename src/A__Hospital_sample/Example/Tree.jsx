import React, { useState } from "react";

export default function Tree() {
  const [inputs, setInputs] = useState({ name: "", value1: "", value2: "", parentId: null });
  const [tree, setTree] = useState([]);

  // State to track expanded nodes
  const [expandedNodes, setExpandedNodes] = useState({});

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  // Toggle expand/collapse for nodes
  const toggleExpand = (id) => {
    setExpandedNodes({ ...expandedNodes, [id]: !expandedNodes[id] });
  };

  // Add a new node to the tree
  const addNode = (parentId = null) => {
    const newNode = {
      id: Date.now(),
      parentId,
      name: inputs.name,
      value1: inputs.value1,
      value2: inputs.value2,
      children: [],
    };

    if (parentId === null) {
      // Add as root node
      setTree([...tree, newNode]);
    } else {
      // Add as child node
      const updatedTree = [...tree];
      const stack = [...updatedTree];

      while (stack.length) {
        const current = stack.pop();
        if (current.id === parentId) {
          current.children.push(newNode);
          break;
        }
        stack.push(...current.children);
      }
      setTree(updatedTree);
    }

    setInputs({ name: "", value1: "", value2: "", parentId: null });
  };

  // Render the tree with dropdown functionality
  const renderTree = (nodes) => {
    return (
      <ul className="ml-4">
        {nodes.map((node) => (
          <li key={node.id} className="mb-2">
            <div className="flex items-center">
              {node.children.length > 0 && (
                <button
                  onClick={() => toggleExpand(node.id)}
                  className="mr-2 text-blue-500"
                > 
                  {expandedNodes[node.id] ? "▼" : "▶"}
                </button>
              )}
              <span className="mr-2 font-bold">{node.name}</span>
              <button
                className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm"
                onClick={() =>
                  setInputs({ name: "", value1: "", value2: "", parentId: node.id })
                }
              >
                +
              </button>
            </div>
            {expandedNodes[node.id] && node.children.length > 0 && renderTree(node.children)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <input
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleInputChange}
          placeholder="Name"
          className="border p-2 mr-2 rounded"
        />
        <input
          type="text"
          name="value1"
          value={inputs.value1}
          onChange={handleInputChange}
          placeholder="Value 1"
          className="border p-2 mr-2 rounded"
        />
        <input
          type="text"
          name="value2"
          value={inputs.value2}
          onChange={handleInputChange}
          placeholder="Value 2"
          className="border p-2 mr-2 rounded"
        />
        <button
          onClick={() => addNode(inputs.parentId || null)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <div className="mb-4">
        {tree.length > 0 && (
          <div>
            <h3 className="font-bold mb-2">Tree Structure:</h3>
            {renderTree(tree)}
          </div>
        )}
      </div>
    </div>
  );
}
