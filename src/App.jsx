import { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [entries, setEntries] = useState([]);

  const handleSubmit = () => {
    if (firstName && lastName && age) {
      const newEntry = { firstName, lastName, age };
      setEntries([...entries, newEntry]);
      setFirstName('');
      setLastName('');
      setAge('');
    }
  };

  return (
    <>
      <div className='card'>
        <h2>Enter Your Name</h2>
        <div className="inputs">
          <div className='entering'>
            <h3>First Name: </h3>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className='entering'>
            <h3>Last Name: </h3>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className='entering'>
            <h3>Age: </h3>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.firstName}</td>
              <td>{entry.lastName}</td>
              <td>{entry.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
