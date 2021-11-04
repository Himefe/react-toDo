import React from "react";
import ReactDOM from "react-dom";

import "../src/style.css";
import Button from "./components/Button";


const App = () => {
  const [tarefas, setTarefas] = React.useState([]);
  const [input, setInput] = React.useState("");
  // const [clicked, setClicked] = React.useState("");

  const inputRef = React.useRef();

  // React.useEffect(() => {
  //   if (window.localStorage.getItem("list") !== null) {
  //     setTarefas([...window.localStorage.getItem("list").split(",")]);
  //   }
  // }, [clicked]);

  const handleClick = async (event) => {
    if (input === "" || input === " ") {
      alert("Por favor digite alguma tarefa!");
      return null;
    } else {
      setTarefas([...tarefas, input]);
      // window.localStorage.setItem("list", [...tarefas, input]);
      // setClicked(true);
      setInput("");
    }

    inputRef.current.focus();
  };

  const tasker = ({ currentTarget }) => {
    let elemento = currentTarget.closest("li");

    elemento.hasAttribute("data-checked") ? elemento.removeAttribute("data-checked") : elemento.setAttribute("data-checked", "");
    
  };

  const excluirTask = ({currentTarget}) => {
    tarefas.splice(currentTarget.closest("li").getAttribute("data-id"), 1);
    setTarefas([...tarefas]);
  }


  return (
    <main>
      <h2>Tarefas</h2>
      <div className="area-ul">
        {tarefas.length < 1 && <span>Nenhuma tarefa inserida!</span>}
        <ul>
          {tarefas.map((comentario, index) => (
            <li key={index} data-id={index}>
              <div className="check-name-area">
                <span className="check-area" onClick={tasker}>
                  <span></span>
                </span>
                <span>{comentario}</span>
              </div>
              <span className="excluir" onClick={excluirTask}>
                X
              </span>
            </li>
          ))}
        </ul>
        <div className="input-area">
          <input
            type="text"
            value={input}
            id="label-inserir"
            onChange={({ target }) => setInput(target.value)}
            ref={inputRef}
            onKeyDown={(event) =>
              event.key === "Enter" ? handleClick() : null
            }
            placeholder="Digite a sua tarefa"
          />
        </div>
        <Button onClick={handleClick} texto="Inserir nova tarefa" />
      </div>
    </main>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
