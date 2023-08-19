function input(input) {
  let nilai = document.getElementById("screenValue").innerHTML;
  nilai = nilai + input;
  document.getElementById("screenValue").innerHTML = nilai;
}

function negativeNumber() {
  let nilai = document.getElementById("screenValue").innerHTML;
  nilai = nilai * -1;
  document.getElementById("screenValue").innerHTML = nilai;
}

function percent() {
  let nilai = document.getElementById("screenValue").innerHTML;
  nilai = nilai / 100;
  document.getElementById("screenValue").innerHTML = nilai;
}

function result() {
  let nilai = document.getElementById("screenValue").innerHTML;
  if (nilai != "") {
    document.getElementById("screenValue").innerHTML = eval(nilai);
  } else if (nilai == "") {
    document.getElementById("screenValue").innerHTML = "empty!";
    document.getElementById("screenValue").classList = "col-12 border-0 custom-textview d-flex py-4 text-danger fw-bold fs-4";
    setTimeout(() => (document.getElementById("screenValue").innerHTML = ""), 2000);
    setTimeout(() => (document.getElementById("screenValue").classList = "col-12 border-0 custom-textview d-flex py-4 text-white-50 fw-bold fs-4"), 2000);
  }
}

function clean() {
  document.getElementById("screenValue").innerHTML = "";
}

function backspace() {
  let nilai = document.getElementById("screenValue").innerHTML;
  document.getElementById("screenValue").innerHTML = nilai.substring(0, nilai.length - 1);
}
