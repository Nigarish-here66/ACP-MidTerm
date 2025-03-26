import React, { useState, useEffect } from 'react';
import styles from "../styles/text.modules.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const completeTask = (index) => {
    setTasks(
      tasks.map((t, i) =>
        i === index ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (count >= 5) {
      setIsCompleted(true);
    }
  }, [count]);

  return (
    <div className='container'>
      <div>
        <h3>Counter</h3>
        <p>Count: {count}</p>
        <button 
          onClick={incrementCount}
          className="increment-button"
        >
          Increment Count
        </button>
        {tasks.map((t, index) => (
          <button 
            key={index}
            onClick={() => completeTask(index)}
            className="complete-button"
            disabled={t.completed}
          >
            {t.completed ? "Completed" : "Complete"}
          </button>
        ))}
        {isCompleted && <p>Counter module is already completed</p>}
      </div>
    </div>
  );
};

export default Counter;