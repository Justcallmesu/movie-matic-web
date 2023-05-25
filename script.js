// Mendefinisikan variabel
const seats = document.querySelectorAll(".seat");
const selectedSeatContainer = document.getElementById("selected-seat");
const checkoutButton = document.getElementById("checkout");

let selectedSeats = [];

// Fungsi untuk memperbarui daftar kursi yang dipilih
function updateSelectedSeat() {
  selectedSeatContainer.textContent = selectedSeats.join(", ");
}

// Fungsi untuk memilih atau membatalkan pilihan kursi
function selectSeat(seatIndex) {
  const seat = seats[seatIndex];
  if (seat.className.includes("selected")) {
    // Batalkan pilihan kursi
    seat.className = "seat";
    selectedSeats.splice(selectedSeats.indexOf(seatIndex + 1), 1);
  } else if (seat.className.includes("occupied")) {
    // Kursi sudah terisi
    alert("Maaf, kursi sudah terisi!");
  } else {
    // Pilih kursi
    seat.className = "seat selected";
    selectedSeats.push(seatIndex + 1);
  }
  updateSelectedSeat();
}

// Tambahkan event listener pada setiap kursi
seats.forEach((seat, index) => {
  seat.addEventListener("click", () => {
    selectSeat(index);
  });
});

// Fungsi untuk checkout
checkoutButton.addEventListener("click", () => {
  if (selectedSeats.length === 0) {
    alert("Anda belum memilih kursi!");
        return;
      }
      
      const confirmMessage = `Anda memesan kursi nomor ${selectedSeats.join(", ")} . Apakah Anda ingin melanjutkan pembayaran?`;
      const isConfirmed = confirm(confirmMessage);
      
      if (isConfirmed) {
        selectedSeats.forEach((seatIndex) => {
          seats[seatIndex - 1].className = "seat occupied";
        });
        selectedSeats = [];
        updateSelectedSeat();
      }
    });
    

