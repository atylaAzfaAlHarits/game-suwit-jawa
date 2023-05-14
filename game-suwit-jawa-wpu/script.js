var tanya = true;
while(tanya){
var p = prompt('pilih: gajah, semut, orang');

var comp = Math.random();

if(comp < 0.34){
    comp = 'gajah';
}else if(comp >= 0.34 && comp < 0.67){
    comp = 'orang';
}else{
    comp = 'semut';
}

if(p == comp){
    hasil = 'SERI';
}else if(p == 'gajah'){
    hasil = comp == 'orang' ? 'MENANG' : 'KALAH';
}else if(p == 'orang'){
    hasil = comp == 'gajah' ? 'KALAH' : 'MENANG';
}else if(p == 'orang'){
    hasil = comp == 'semut' ? 'MENANG' : 'KALAH';
}else if(p == 'semut'){
    hasil = comp == 'orang' ? 'KALAH' : 'MENANG';
}else if(p == 'gajah'){
    hasil = comp == 'semut' ? 'KALAH' : 'MENANG';
}else if(p == 'semut'){
    hasil = comp == 'gajah' ? 'MENANG' : 'KALAH';
}else{
    hasil = 'Memasukan hasil yang salah';
}

alert(`Kamu memilih ${p} dan komputer memilih ${comp} hasilnya kamu ${hasil}`);
tanya = confirm('Mau bermain lagi?');

}

alert('Terima kasih sudah bermain');