import React, { useState } from "react";
import styles from "./styles.module.css";
import Table from "./Table";

function App() {
  const [name, setName] = useState(""); //basic fields
  const [marks, setMarks] = useState("");
  const [result, setResult] = useState([]);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState("");
  const [editMarks, setEditMarks] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const trimmedName = name.trim();
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!trimmedName.match(nameRegex)) {
      alert("Please enter a valid name (letters and spaces only).");
      return;
    }

    const marksValue = Number(marks);
    if (isNaN(marksValue) || marksValue < 0 || marksValue > 100) {
      alert("Please enter valid marks between 0 and 100.");
      return;
    }

    setResult([...result, { name: trimmedName, marks: marksValue }]);
    setName("");
    setMarks("");
  }

  function openEditModal(index) {
    setEditIndex(index);
    setEditName(result[index].name);
    setEditMarks(result[index].marks);
    setIsModalOpen(true);
  }

  function successMessage() {
    alert("Record updated successfully!");
  }

  function handleUpdate() {
    const updatedResult = [...result];
    updatedResult[editIndex] = { name: editName, marks: editMarks };
    
    setResult(updatedResult);
    setIsModalOpen(false);
    setSuccess(true);
  }

  return (
    <div className={styles.App}>
      <div className={styles.container}>
        {/* Form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <h3>Enter Student Details</h3>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Enter Marks"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
          />
          <button className={styles.button} type="submit">
            Submit
          </button>
        </form>

        {/* Table */}
        <Table result={result} setResult={setResult} openEditModal={openEditModal} styles={styles} />

      </div>

      {/* ✅ Modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Edit Record</h3>
            <input
              className={styles.input}
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
            <input
              className={styles.input}
              type="text"
              value={editMarks}
              onChange={(e) => setEditMarks(e.target.value)}
            />
            <div className={styles.modalActions}>
              <button className={styles.button} onClick={handleUpdate}>
                Update
              </button>
              <button
                className={styles.deleteButton}
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Success Message */}
      {success && (
        <div className={styles.successMessage}>
          <p>Record updated successfully!</p>
          <button className={styles.button1} onClick={() => setSuccess(false)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
