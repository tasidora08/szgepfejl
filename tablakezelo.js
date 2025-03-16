function sortRogzit() {
    var tabla = document.getElementsByTagName("table")[0];
    var sor = tabla.insertRow(1);
    var cella1 = sor.insertCell(0);
    var cella2 = sor.insertCell(1);
    cella1.innerHTML = document.getElementById("tnev").value;
    var lista = document.getElementById("tegyseg");
    var mertekegyseg = lista.options[lista.selectedIndex].text;
    cella2.innerHTML = document.getElementById("tertek").value + mertekegyseg;
}