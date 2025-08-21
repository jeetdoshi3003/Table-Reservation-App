import React from "react";
import styles from "./styles.module.css";

export default function Table({ result, setResult, openEditModal }) {
    return (
    <div className={styles.result}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Marks</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {result.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.marks}</td>
                  <td>
                    <button
                      className={styles.button1}
                      onClick={() => openEditModal(index)}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        const newResult = [...result];
                        newResult.splice(index, 1);
                        setResult(newResult);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    );
}