//pembayaran
// Mendapatkan total jumlah pembayaran dari database atau variabel lainnya
const totalAmount = 100;

// Mendapatkan metode pembayaran yang dipilih
const paymentMethodElement = document.getElementById("payment-method");
const paymentOptionElement = document.getElementById("payment-option");
const paymentDetailsElement = document.getElementById("payment-details");

paymentOptionElement.addEventListener("change", () => {
  const selectedPaymentOption = paymentOptionElement.value;
  if (selectedPaymentOption === "mbanking") {
    paymentMethodElement.textContent = "M-Banking";
    paymentDetailsElement.classList.add("payment-option-details");
    document.getElementById("mbanking-details").style.display = "block";
    document.getElementById("ewallet-details").style.display = "none";
  } else if (selectedPaymentOption === "ewallet") {
    paymentMethodElement.textContent = "E-Wallet";
    paymentDetailsElement.classList.add("payment-option-details");
    document.getElementById("ewallet-details").style.display = "block";
    document.getElementById    ("mbanking-details").style.display = "none";
  }
});

// Mendapatkan nomor kode pembayaran berdasarkan opsi pembayaran yang dipilih
function getPaymentCode() {
  let paymentCode = "";
  const selectedPaymentOption = paymentOptionElement.value;

  if (selectedPaymentOption === "mbanking") {
    const selectedBank = document.getElementById("mbanking-bank").value;
    paymentCode = getMBankingPaymentCode(selectedBank);
  } else if (selectedPaymentOption === "ewallet") {
    const selectedProvider = document.getElementById("ewallet-provider").value;
    paymentCode = getEWalletPaymentCode(selectedProvider);
  }

  return paymentCode;
}

// Fungsi untuk mendapatkan nomor kode pembayaran M-Banking berdasarkan bank yang dipilih
function getMBankingPaymentCode(bank) {
  // Simulasi pengambilan nomor kode pembayaran dari database berdasarkan bank
  if (bank === "BCA") {
    return "123456789";
  } else if (bank === "BNI") {
    return "987654321";
  } else if (bank === "Mandiri") {
    return "567890123";
  }
}

// Fungsi untuk mendapatkan nomor kode pembayaran E-Wallet berdasarkan provider yang dipilih
function getEWalletPaymentCode(provider) {
  // Simulasi pengambilan nomor kode pembayaran dari database berdasarkan provider
  if (provider === "GoPay") {
    return "0123456789";
  } else if (provider === "OVO") {
    return "9876543210";
  } else if (provider === "DANA") {
    return "2468135790";
  }
}

// Tombol pembayaran
const paymentButton = document.getElementById("payment-button");
paymentButton.addEventListener("click", () => {
  const paymentCode = getPaymentCode();
  const paymentMethod = paymentMethodElement.textContent;
  const totalAmountElement = document.getElementById("total-amount");
  const paymentOption = paymentOptionElement.value;

  // Simpan data pembayaran ke database
  savePaymentData(totalAmount, paymentMethod, paymentOption, paymentCode);

  // Tampilkan modal konfirmasi pembayaran
  showPaymentConfirmationModal(totalAmountElement.textContent, paymentMethod, paymentOption, paymentCode);
}
);



// Fungsi untuk menyimpan data pembayaran ke database
function savePaymentData(totalAmount, paymentMethod, paymentOption, paymentCode) {
  // Kirim data pembayaran ke server atau lakukan proses penyimpanan ke database

  // Simulasi proses penyimpanan data
  console.log("Simpan data pembayaran ke database:");
  console.log("Total Amount:", totalAmount);
  console.log("Payment Method:", paymentMethod);
  console.log("Payment Option:", paymentOption);
  console.log("Payment Code:", paymentCode);
}

// Tampilkan modal konfirmasi pembayaran
function showPaymentConfirmationModal(totalAmount, paymentMethod, paymentOption, paymentCode) {
  document.getElementById("order-summary").remove();
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  modal.style.display = "block";
  modalContent.innerHTML = `
    <h2>Payment Confirmation</h2>
    <p>Total Amount: ${totalAmount}</p>
    <p>Payment Method: ${paymentMethod}</p>
    <p>Payment Code: ${paymentCode}</p>
    <button onclick="printTicket()">OK</button>
  `;
  
}


// Cetak tik
function printTicket() {
  // Dapatkan data tiket dari database atau variabel lainnya
  const ticketData = {
    movieName: "Avengers: Endgame",
    cinemaName: "Cinema 1",
    seatNumber: "A1",
    showTime: "19:30",
    ticketPrice: "$10"
  };

  // Buat tampilan tiket untuk dicetak
  const ticketContent = `
    <div class="ticket">
      <h2>Movie Ticket</h2>
      <p><strong>Movie:</strong> ${ticketData.movieName}</p>
      <p><strong>Cinema:</strong> ${ticketData.cinemaName}</p>
      <p><strong>Seat:</strong> ${ticketData.seatNumber}</p>
      <p><strong>Show Time:</strong> ${ticketData.showTime}</p>
      <p><strong>Price:</strong> ${ticketData.ticketPrice}</p>
    </div>
  `;

  // Buka jendela cetak
  const printWindow = window.open();
  printWindow.document.open();
  printWindow.document.write(`
    <html>
    <head>
      <title>Karcis</title>
      <style>
      body{
        background-color: #E8AA42;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
        .ticket {
          max-width: 800px;
          height: auto;
          margin: auto;
          padding: 20px 35px;
          background-color: #C07F00;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          text-align: center;
        }
        h2 {
          text-align: center;
        }
        p {
          margin: 10px 0;
        }
      </style>
    </head>
    <body>
      ${ticketContent}
      <button onclick="closeModal()"><a href="index.html">OK</a></button>
    </body>
    </html>
  `);
  printWindow.document.close();
}

// Tutup modal
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}