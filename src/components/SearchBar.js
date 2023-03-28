import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // We cannot write like this coz setState is an asynchronous function.
    // It does not immediately update the state of the component.
    // setTerm(event.target[0].value);

    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input onChange={handleChange}/>
      </form>
    </div>
  );
}

export default SearchBar;
