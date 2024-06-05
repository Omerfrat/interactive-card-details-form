// Form elemanlarına erişim için değişkenler
let cardNameInput, cardNumberInput, cardExpiryInput, cardCvcInput;

// DOMContentLoaded olayı tetiklendiğinde çalışacak olan fonksiyon
function initializeForm() {
  // Form elemanlarına erişim
  cardNameInput = document.querySelector('.card-name1');
  cardNumberInput = document.querySelector('.card-number1');
  cardExpiryInput = document.querySelectorAll('.card-expiry1');
  cardCvcInput = document.querySelector('.card-cvc');

  // Form gönderme olayı için olay dinleyici
  document.getElementById('submit').addEventListener('click', function (event) {
    event.preventDefault(); // Formun varsayılan gönderim davranışını engelle

    // Form doğrulamasını yap
    if (validateForm()) {
      // Eğer form doğruysa, kart detaylarını güncelle
      updateCardDisplay();
    } else {
      // Eğer form doğru değilse, hata mesajını görüntüle veya geçersiz girişi işle
      // Örnek: alert('Lütfen geçerli kredi kartı bilgilerini girin.');
    }
  });
}

// Sayfa yüklendiğinde formu başlat
initializeForm();

// Formu doğrulamak için fonksiyon
function validateForm() {
  // Doğrulama mantığını burada uygula
  // Örnek: Kart numarasının geçerli olup olmadığını, son kullanma tarihinin gelecekte olup olmadığını kontrol et, vb.
  return true; // Form doğruysa true döndür, değilse false döndür
}

// Kart gösterimini güncellemek için fonksiyon
function updateCardDisplay() {
  // Form girişlerinden değerleri al
  const cardName = cardNameInput.value;
  const cardNumber = cardNumberInput.value;
  const cardExpiryMonth = cardExpiryInput[0].value;
  const cardExpiryYear = cardExpiryInput[1].value;
  const cardCvc = cardCvcInput.value;

  // Kullanıcının girdiği kart detaylarıyla kart gösterimini güncelle
  document.getElementById('card-name').textContent = cardName;
  document.getElementById('cc-number').textContent = cardNumber;
  document.getElementById('card-expiry').textContent = `${cardExpiryMonth}/${cardExpiryYear}`;
  document.getElementById('cvc').textContent = cardCvc;

  // Gerekiyorsa ek stil veya işleme ekle
}
