import React from 'react';
import './SmartPower.css';
import { motion } from 'framer-motion';

const SmartPower = () => {
  return (
    <section className="smart-power">
      <div className="smart-power-container">
        <motion.div 
          className="smart-power-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Smart Power Systems</h2>
          <p>Revolutionize your power management with our intelligent solutions that optimize energy distribution, reduce costs, and enhance reliability.</p>
        </motion.div>

        <motion.div 
          className="smart-power-grid"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid-item">
            <img 
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBmaWxsPSIjODAyOGM4Ij48cGF0aCBkPSJNMzg0IDI4OGgtOTZWMTYwaDk2YzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMyaC05NlYzMmMwLTE3LjctMTQuMy0zMi0zMi0zMnMtMzIgMTQuMy0zMiAzMnY2NEgxMjhjLTE3LjcgMC0zMiAxNC4zLTMyIDMyIDAgMTcuNyAxNC4zIDMyIDMyIDMyaDk2djEyOGgtOTZjLTE3LjcgMC0zMiAxNC4zLTMyIDMyIDAgMTcuNyAxNC4zIDMyIDMyIDMyaDk2djY0YzAgMTcuNyAxNC4zIDMyIDMyIDMyIDE3LjcgMCAzMi0xNC4zIDMyLTMydi02NGg5NmMxNy43IDAgMzItMTQuMyAzMi0zMiAwLTE3LjctMTQuMy0zMi0zMi0zMnoiLz48L3N2Zz4=" 
              alt="Smart Grid Technology"
              className="power-icon"
            />
            <h3>Smart Grid Integration</h3>
            <p>Advanced grid management systems for optimal power distribution</p>
          </div>
          
          <div className="grid-item">
            <img 
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBmaWxsPSIjODAyOGM4Ij48cGF0aCBkPSJNMzgwLjIgMjU1LjFjLTEuOC01LjUtMi41LTExLjQtMi41LTE3LjQgMC0zNS4zIDI4LjctNjQgNjQtNjRzNjQgMjguNyA2NCA2NGMwIDYtLjcgMTEuOS0yLjUgMTcuNGwtOTQuNSAyODIuMUMzOTkuMSA1NjEgMzc1LjcgNTc2IDM1MiA1NzZoLTkyYy0yMy43IDAtNDcuMS0xNS01Ni41LTM4LjRMMTA4IDI1NS4xYy0xLjgtNS41LTIuNS0xMS40LTIuNS0xNy40IDAtMzUuMyAyOC43LTY0IDY0LTY0czY0IDI4LjcgNjQgNjRjMCA2LS43IDExLjktMi41IDE3LjRMMTc2IDM3Nmg2MEwyODggMTUyLjFjLTEuOC01LjUtMi41LTExLjQtMi41LTE3LjQgMC0zNS4zIDI4LjctNjQgNjQtNjRzNjQgMjguNyA2NCA2NGMwIDYtLjcgMTEuOS0yLjUgMTcuNEwzODAgMzc2aDYwbC01OS44LTEyMC45eiIvPjwvc3ZnPg==" 
              alt="Renewable Energy Integration"
              className="power-icon"
            />
            <h3>Renewable Integration</h3>
            <p>Seamless integration of solar, wind, and other renewable sources</p>
          </div>
          
          <div className="grid-item">
            <img 
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBmaWxsPSIjODAyOGM4Ij48cGF0aCBkPSJNOTYgMjU2YzAgMTcuNyAxNC4zIDMyIDMyIDMyaDMyYzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMyaC0zMmMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ6bTEyOCAwYzAgMTcuNyAxNC4zIDMyIDMyIDMyaDMyYzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMyaC0zMmMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ6bTEyOCAwYzAgMTcuNyAxNC4zIDMyIDMyIDMyaDMyYzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMyaC0zMmMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ6Ii8+PC9zdmc+" 
              alt="Power Monitoring System"
              className="power-icon"
            />
            <h3>Real-time Monitoring</h3>
            <p>24/7 power monitoring and predictive maintenance</p>
          </div>
          
          <div className="grid-item">
            <img 
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBmaWxsPSIjODAyOGM4Ij48cGF0aCBkPSJNMjg4IDMyYzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMyVjI1NmMwIDE3LjcgMTQuMyAzMiAzMiAzMnMzMi0xNC4zIDMyLTMyVjMyem0tMzIgMTkyYy0zNS4zIDAtNjQgMjguNy02NCA2NHYxMjhjMCA1My00MyA5Ni05NiA5Ni01MyAwLTk2LTQzLTk2LTk2VjMyMGMwLTM1LjMtMjguNy02NC02NC02NC0xNy43IDAtMzIgMTQuMy0zMiAzMnM0My4yIDk2IDk2IDk2YzUzIDAgOTYtNDMgOTYtOTZ2LTEyOGMwLTUzIDQzLTk2IDk2LTk2IDUzIDAgOTYgNDMgOTYgOTZ2MTI4YzAgNTMtNDMgOTYtOTYgOTYtMTcuNyAwLTMyIDE0LjMtMzIgMzJzMTQuMyAzMiAzMiAzMmM4OC40IDAgMTYwLTcxLjYgMTYwLTE2MFYyMjRjMC0zNS4zLTI4LjctNjQtNjQtNjR6Ii8+PC9zdmc+" 
              alt="Energy Storage Solutions"
              className="power-icon"
            />
            <h3>Energy Storage</h3>
            <p>Advanced battery and energy storage management</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SmartPower;