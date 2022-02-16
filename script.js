<script>

    setInterval(function(){

      var urutanabjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      //var balikanjad =  'ZYXWVUTSRQPONMLKJIHGFEDCBAZYXWVUTSRQPONMLKJIHGFEDCBA';
      var output='';

      const plaintext = document.querySelector('#plaintext').value;
      console.log(plaintext);
      const arah = document.querySelector('#arah').value;
      console.log(arah);
      var pergeseran = document.querySelector('#pergeseran').value;
      pergeseran=pergeseran/1;
      console.log(pergeseran);
      var balikanjad = document.querySelector('#balikanjad').value;
      balikanjad=balikanjad+balikanjad;
      console.log(balikanjad);

      //ULANGI SESUAI BANYAK NILAI YG MASUK;
      for(var i=0;i<plaintext.length;i++){
        //mengetahui huruf apa di index tertentu;
        //misal dalam variabel plaintext di index ke(i) adalah huruf 'w';
        var huruf=plaintext.charAt(i);//w
        //setelah mengetahui suatu huruf di index tertentu,
        //cari dalam variabel urutanabjad urutan berapa huruf itu misal 'w';
        var urutanabjadd=urutanabjad.indexOf(huruf);//23
          //================================================
            //logika;
            if(arah=='kanan'){
              
              urutanabjadd=urutanabjadd+pergeseran;
              console.log(urutanabjadd);
            }
            if(arah=='kiri'){
              
              urutanabjadd=26+(urutanabjadd-pergeseran);
              console.log(urutanabjadd);
            }
          //================================================
        //setelah mengetahui nomer urut suatu huruf dalam variabel urutanabjad;
        //lalu cari urutan yg didapat akan diubah ke huruf apa? balikanjad;
        //contoh huruf "w" menjadi "d", dengan mencari sesuai index urutanabjad yg didapat;
        var balikanjadd=balikanjad.charAt(urutanabjadd);//d

        //setelah selesai push ke variabel output;
        output=output+balikanjadd;
        console.log(output);
      }

      var hasil = document.querySelector('.hasil').innerHTML='Hasil : '+output; 

    },100);
    
  </script>
