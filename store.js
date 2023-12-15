let Indexslide = 1;
Slideberjalan(Indexslide);

function tekan(n) {
  Slideberjalan(Indexslide += n);
}

function Slideberjalan(n) {
  let i;
  let slides = document.getElementsByClassName("gambar");
  let lanjut = document.getElementsByClassName("lanjut");
  if (n > slides.length) {Indexslide = 1}
  if (n < 1) {Indexslide = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < lanjut.length; i++) {
    lanjut[i].className = lanjut[i].className.replace(" active", "");
  }
  slides[Indexslide-1].style.display = "block";
  lanjut[Indexslide-1].className += " active";
}