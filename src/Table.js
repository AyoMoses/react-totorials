import React from 'react';

// SIMPLE COMPONENTS USE ARROW FUNCTION
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

// WE PASS PROPS AS A PARAMTER TO GAIN ACCESS TO DATA AND DISPLAY IN ACTUAL DOM
const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      // WE ADDED KEY TO HELP IDENTIFY EACH LIST DataTransferItem
      // ALWAYS USE keys WHEN MAKING LISTS IN REACT
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
            <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

const Table = (props) => {
  const { characterData, removeCharacter } = props;

  return (
    <table>
      <TableHeader />
      <TableBody
        characterData={characterData}
        removeCharacter={removeCharacter}
      />
    </table>
  );
};

export default Table;
