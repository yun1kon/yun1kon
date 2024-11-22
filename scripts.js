function showMessage() {
  alert('Спасибо за отзыв! Ты сделал мой день лучше 😊');
}

function rejoice() {
  document.body.innerHTML = `
    <div class="message">
      <h1>Ты пуся 💖</h1>
      <button class="btn primary" onclick="goBack()">Вернуться</button>
    </div>
  `;
}

function goBack() {
  location.reload(); // Перезагрузить страницу, чтобы вернуться на визитку.
}
