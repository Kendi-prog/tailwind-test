import React, { useState } from "react";
import Modal from "./components/modal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h1>React Portals Example</h1>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>This is a Portal Modal</h2>
        <p>It is rendered outside the normal DOM tree.</p>
      </Modal>
    </div>
  );
}

