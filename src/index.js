import React from "react";
import ReactDOM from "react-dom";

import "../src/style.css";
import Button from "./components/Button";

const App = () => {
  const [tarefas, setTarefas] = React.useState([]);
  const [input, setInput] = React.useState("");
  const [alerta, setAlerta] = React.useState(false);


  // const [clicked, setClicked] = React.useState("");

  const inputRef = React.useRef();

  const alertaRef = React.useRef();

  const timeOutRef = React.useRef();

  // React.useEffect(() => {
  //   if (window.localStorage.getItem("list") !== null) {
  //     setTarefas([...window.localStorage.getItem("list").split(",")]);
  //   }
  // }, [clicked]);

  React.useEffect(() => {
    if (alerta) alertaRef.current.setAttribute("show", "");
  }, [alerta])

  const showAlert = () => {
    setAlerta(true);
    
    clearTimeout(timeOutRef.current);

    timeOutRef.current = setTimeout(() => {
      setAlerta(false);
    }, 2000);
    

    return null
  }

  const handleClick = async (event) => {
    if (input === "" || input === " ") {
      showAlert();
      
      return null;
    } else {
      setTarefas([
        {
          label: input,
          id: String(Math.floor(Math.random() * 1000)),
        },
        ...tarefas,
      ]);
      // window.localStorage.setItem("list", [...tarefas, input]);
      // setClicked(true);
      setInput("");
    }

    inputRef.current.focus();
  };

  const tasker = ({ currentTarget }) => {
    let elemento = currentTarget.closest("li");

    elemento.hasAttribute("data-checked")
      ? elemento.removeAttribute("data-checked")
      : elemento.setAttribute("data-checked", "");
  };

  const excluirTask = ({ currentTarget }) => {
    let id = currentTarget.closest("li").getAttribute("data-id");
    let index = tarefas.findIndex((i) => i.id === id);

    tarefas.splice(index, 1);
    setTarefas([...tarefas]);
  };

  return (
    <main>
      {alerta && (
        <div className="alerta" ref={alertaRef}>
          <span>Por favor digite alguma tarefa!</span>
        </div>
      )}
      <h2>Tarefas</h2>
      <div className="area-ul">
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
          <Button onClick={handleClick} texto="Inserir nova tarefa" />
        </div>
        {tarefas.length < 1 && <span>Nenhuma tarefa inserida!</span>}
        <ul>
          {tarefas.map((tarefa) => (
            <li key={tarefa.id} data-id={tarefa.id}>
              <div className="check-name-area">
                <span className="check-area" onClick={tasker}>
                  <span></span>
                </span>
                <span>{tarefa.label}</span>
              </div>
              <span className="excluir" onClick={excluirTask}>
                X
              </span>
            </li>
          ))}
        </ul>
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
