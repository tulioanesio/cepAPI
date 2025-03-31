function Enviar() {
  let cep = document.getElementById("cep").value;
  let localidade = document.getElementById("localidade");
  localidade.textContent = ""

  fetch("https://viacep.com.br/ws/" + cep + "/json/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      localidade.innerHTML +=
        data.localidade + "<br>" + data.logradouro + "<br>" + data.estado;
    });
}
