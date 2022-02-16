//Bermain waktu
const Bln="2";
const Tgl="3";
const Thn="2021 ";
const J="21";
const M="31";
const D="30";
// var wadah='2 3, 2021 21:31:30';
var wadah=Bln+" "+Tgl+","+" "+Thn+" "+J+":"+M+":"+D;
console.log(wadah);
const waktu=setInterval(function() {
    // const sekarang=new Date().getDate();
    // const hari=Math.floor(sekarang/(1000*60*60*24));
    // const jam = Math.floor(sekarang % (1000 * 60 * 60 * 24)/(1000*60*60));
    // const menit = Math.floor(sekarang % (1000 * 60 * 60) / (1000 * 60));
    // const detik = Math.floor(sekarang % (1000 * 60) / (1000));
    // console.log('sisa waktu anda '+hari+' hari '+jam+' jam '+menit+' menit '+detik+' detik lagi!!');

    //const tujuan=new Date('Jan 3, 2021 19:58:30').getDate();
    // const sekarang=new Date();
    // const day=sekarang.getDay();
    // const jam=sekarang.getHours();
    // const menit=sekarang.getMinutes();
    // const detik=sekarang.getSeconds();
    // console.log(day, jam, menit, detik);

const tanggalTujuan = new Date(wadah).getTime();
const sekarang = new Date().getTime();
const selisih = tanggalTujuan-sekarang;
const hari = Math.floor(selisih/(1000*60*60*24));
const jam = Math.floor(selisih % (1000 * 60 * 60 * 24)/(1000*60*60));
const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));
const detik = Math.floor(selisih % (1000 * 60) / (1000));

console.log(hari+" Hari : "+ jam+" Jam : "+menit+" Menit : "+detik+" Detik")

if(sekarang>=tanggalTujuan){
    console.log('Token Habis');
}
    
}, 1000);

// btn-nav
const btn=document.querySelector(".Navbar .span-btn");
const menu=document.querySelector(".Navbar .menu");
btn.addEventListener('click',function(){
    console.log('Navbar Berfungsi');
    menu.classList.toggle('aktif');
});
// logout
const logout=document.querySelector('.Profile li:nth-child(2)');
logout.addEventListener('click',function(){
    window.location.href="Login.html"
});

//efek load
$(this).on('load',function(){
    console.log('load');
    $('.card').each(function(i){
        setTimeout(function(){
            console.log('2detik');
            $('.card').eq(i).addClass('muncul');
        },50*i)
    })
});

