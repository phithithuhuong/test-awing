import React, { useState } from 'react';

function App() {
    const [data, setData] = useState([
        { id: 1, name: "one", age: 20 },
        { id: 2, name: "two", age: 25 },
        { id: 3, name: "three", age: 30 },
        { id: 4, name: "four", age: 35 },
        { id: 5, name: "five", age: 40 }
    ]);

    const handleInputChange = (index: number, fieldName: string, newValue: string | number) => {
        const newData = [...data];
        newData[index] = { ...newData[index], [fieldName]: newValue };
        setData(newData);
    };

    return (
        <div>
            <h1>Data:</h1>
            <ul>
                {data.map((item, index) => (
                    <div key={item.id}>
                        <input
                            value={item.name}
                            onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                        />
                        <input
                            value={item.age}
                            type="number"
                            onChange={(e) => handleInputChange(index, 'age', parseInt(e.target.value))}
                        />
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default App;
