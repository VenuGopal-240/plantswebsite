import React, { useState } from "react";
// import { Plus } from "lucide-react";

export default function TreeForm() {
  const [inputs, setInputs] = useState({ name: "", value1: "", value2: "" });
  const [tree, setTree] = useState([]);

  // Update input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  // Add a new node (root or child)
  const addNode = (parentId = null) => {
    const newNode = {
      id: Date.now(),
      parentId,
      name: inputs.name,
      value1: inputs.value1,
      value2: inputs.value2,
      children: [],
    };

    // Recursive function to add the node to the correct parent
    const addToTree = (nodes) => {
      return nodes.map((node) => {
        if (node.id === parentId) {
          return { ...node, children: [...node.children, newNode] };
        }
        return { ...node, children: addToTree(node.children) };
      });
    };
    
    setTree(parentId ? addToTree(tree) : [...tree, newNode]);
    setInputs({ name: "", value1: "", value2: "" });
  };

  // Recursive function to render the tree
  const renderTree = (nodes) => {
    return (
      <ul className="ml-4">
        {nodes.map((node) => (
          <li key={node.id} className="mb-2">
            <div className="flex items-center">
              <span className="mr-2 font-bold">{node.name}</span>
              <button
                className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm"
                onClick={() =>
                  setInputs({ name: "", value1: "", value2: "", parentId: node.id })
                }
              >
                {/* <Plus size={12} /> */}
                {node?.name}
                <button>+</button>
              </button>
            </div>
            {renderTree(node.children)}
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
