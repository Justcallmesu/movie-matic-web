const form = document.getElementById("post_film");


const judulFilm = document.getElementById("judul_film");
const durasi = document.getElementById("durasi_film");
const jamTayang = document.getElementById("jam_tayang");
const hargaTiket = document.getElementById("harga_tiket");
const deskripsi = document.getElementById("deskripsi");
const posterFilm = document.getElementById("poster_film");
const trailer = document.getElementById("trailer");

form.addEventListener("submit",async (event)=>{
    event.preventDefault();
    const data = new FormData();
    data.append("judul_film",judulFilm.value);
    data.append("durasi",durasi.value);
    data.append("jam_tayang",jamTayang.value);
    data.append("harga_tiket",hargaTiket.value);
    data.append("deskripsi",deskripsi.value);
    data.append("posterFilm", posterFilm.value);
    data.append("trailer", trailer.value);

    const status = await fetch("http://localhost:3000/api/v1/movie",{
        method:"POST",
        headers:{
            "Content-Type":"multipart/form-data"
        },
        body:data
    })

    console.log(await status.json());
    
})