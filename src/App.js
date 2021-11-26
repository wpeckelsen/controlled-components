import React from "react";
import "./App.css";

//x Naam - tekstveld
//x Leeftijd - getalveld
//x Opmerkingen - tekstareaveld
//x Inschrijven voor de nieuwsbrief - checkbox
//x Versturen-knop (van type submit)

function App () {
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState("");

  function handleSubmit(e) {
    console.log(`form sent!`, {name}, {age});

    e.preventDefault()
  }

  return (
    <>
      <div className="form-container">

        <h2>Contactformulier</h2>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Gegevens</legend>

            <label htmlFor="naam">Naam: </label>
            <input type="text"
                   placeholder="Naam"
                   name="naam"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
            />

            <br />
            <br />

            <label htmlFor="leeftijd">Leeftijd: </label>
            <input type="number"
                   placeholder="Leeftijd"
                   name="Leeftijd"
                   value={age}
                   onChange={(e) => setAge(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Your Review</legend>
            <textarea
              name="remarks"
              placeholder="your remarks"
              id="remarks"
              cols="30"
              rows="10"
            />

            <br />
            <br />

            Sign up for newsletter
            <input type="checkbox" name="checkbox" />

            <br />
            <br />

            <button type="submit" >
              Send
            </button>

          </fieldset>
        </form>
      </div>
    </>
  );
}

export default App;
