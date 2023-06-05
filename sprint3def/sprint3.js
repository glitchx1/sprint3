let jsonData = [
  {
    id: "evento1",
    idUsuario: "",
    nome: "Aniversário do Pedro",
    data: "17/08",
    dataFim: "",
    descricao: "",
  },
  {
    id: "evento2",
    idUsuario: "",
    nome: "Resenha na Casa do Maia",
    data: "28/05",
    dataFim: "",
    descricao: "",
  },
  {
    id: "evento3",
    idUsuario: "",
    nome: "Show do Black Sabbath",
    data: "10/11",
    dataFim: "",
    descricao: "",
  },
  {
    id: "evento4",
    idUsuario: "",
    nome: "Hackatruck",
    data: "05/09",
    dataFim: "",
    descricao: "",
  },
  {
    id: "evento5",
    idUsuario: "",
    nome: "Sprint2",
    data: "14/05",
    dataFim: "",
    descricao: "",
  },
  {
    id: "evento6",
    idUsuario: "",
    nome: "Evento Codelab",
    data: "27/12",
    dataFim: "",
    descricao: "",
  },
];

let eventosEl = document.getElementById("eventos");

jsonData.forEach(function (evento) {
  let eventoEl = document.createElement("li");
  eventoEl.innerText = evento.nome;
  eventosEl.appendChild(eventoEl);
});

let data = jsonData;

function search_eventos() {
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let x = document.querySelector("#eventos");
  x.innerHTML = "";

  for (i = 0; i < data.length; i++) {
    let obj = data[i];

    if (obj.nome.toLowerCase().includes(input)) {
      const elem = document.createElement("li");
      elem.innerHTML = `${obj.nome} - ${obj.data}`;
      x.appendChild(elem);
    }
  }
}

var priorityRadios = document.querySelectorAll('#prioridade input[type="radio"]');
  priorityRadios.forEach(function(radio) {
    radio.addEventListener('change', function(e) {
      var priority = e.target.value;
      var selectedEvent = document.querySelector('.event.selected');
      selectedEvent.classList.remove('high', 'medium', 'low');
      selectedEvent.classList.add(priority);
      document.getElementById('prioridade').style.display = 'none';
      selectedEvent.classList.remove('selected');
    });
  });
