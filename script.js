var historicoCalculos = [];
var modoEscuroAtivado = false;

function exibirModalSobre() {
  var modalSobre = document.getElementById('modalSobre');
  modalSobre.style.display = 'block';
}

function fecharModalSobre() {
  var modalSobre = document.getElementById('modalSobre');
  modalSobre.style.display = 'none';
}

function formatarDataHora() {
  var agora = new Date();
  return agora.toLocaleDateString('pt-BR') + ' ' + agora.toLocaleTimeString('pt-BR');
}

function formatarMoeda(valor) {
  return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(valor);
}

function adicionarAoHistorico(valor, pis, coffins, calculoN, importadostotal, icmstotal) {
  const mascara = "XXX,XX";
  var dataHoraAtual = formatarDataHora();
  historicoCalculos.unshift({
    valor: formatarMoeda(valor),
    data: dataHoraAtual,
    pis: mascara,
    coffins: mascara,
    calculoN: mascara,
    importadostotal: mascara,
    icmstotal: mascara
  });

  exibirHistorico();

  // Adiciona mensagem de demonstração se ainda não existir
  var aviso = document.getElementById("avisoDemo");
  if (!aviso) {
    aviso = document.createElement("div");
    aviso.id = "avisoDemo";
    aviso.style.marginTop = "20px";
    aviso.style.color = "red";
    aviso.style.fontWeight = "bold";
    aviso.innerText = "Este é um protótipo gratuito para demonstração. Para acesso completo, entre em contato pelo e-mail wrubly@gmail.com e solicite a chave de acesso.";
    document.body.appendChild(aviso);
  }
}

function exibirHistorico() {
  var historicoContainer = document.getElementById('historico');
  historicoContainer.innerHTML = '';

  historicoCalculos.forEach(function (item) {
    var div = document.createElement('div');
    div.className = 'historico-item';
    div.innerHTML = `
      <strong>Data:</strong> ${item.data}<br>
      <strong>Valor:</strong> R$ ${item.valor}<br>
      <strong>PIS:</strong> R$ ${item.pis}<br>
      <strong>COFINS:</strong> R$ ${item.coffins}<br>
      <strong>Cálculo N:</strong> R$ ${item.calculoN}<br>
      <strong>Importados Total:</strong> R$ ${item.importadostotal}<br>
      <strong>ICMS Total:</strong> R$ ${item.icmstotal}<br><br>
    `;
    historicoContainer.appendChild(div);
  });
}

function alternarModoEscuro() {
  var body = document.body;
  modoEscuroAtivado = !modoEscuroAtivado;
  if (modoEscuroAtivado) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
}
