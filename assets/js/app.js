// Dovete stampare la lista di spesa in pagina utilizzando ciclo while.
// Rifacciamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto
// del ciclo for. Facciamo attenzione a non dimenticare tutte le differenze
// implementative che il ciclo while ci impone, in particolare alla variabile di indice.

const listaSpesa = ["gocciole", "pasta", "pane", "succo di frutta"];

let i = 0;
const listContainerElem = document.getElementById("list-ctn");

while (i < listaSpesa.length) {
  const listElem = document.createElement("li");
  listElem.innerHTML = listaSpesa[i];
  listContainerElem.append(listElem);
  i++;

}
