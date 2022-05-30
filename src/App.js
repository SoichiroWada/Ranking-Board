import React, { useState, useEffect } from "react";
import Table from './components/Table';

function App () {
    const [sortBy, setSortBy] = useState("");
    const [ascending, setAscending] = useState(null);

    useEffect(() => {
        setSortBy("rank");
        setAscending(true);
    }, [])

    function handleClick (sort) {
        if (sortBy === sort){
          setAscending(!ascending);          
        } else {
          setAscending(true);
        }
        setSortBy(sort);
    }

    return (
        <div className="center">
          <header className="center">
            <h1>Ranking Board</h1>
            <h6>Responsive web by React and Materialize CSS Grid</h6>
          </header>
          <div className="center buttons">
            <Table handleClick={ handleClick } sortBy={ sortBy } asc={ ascending }></Table>
          </div>
        </div>
    );
}

export default App;