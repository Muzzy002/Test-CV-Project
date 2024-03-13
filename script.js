document.getElementById("generate-pdf").addEventListener("click", function (event) {
  event.preventDefault(); // Предотвращаем переход по ссылке

  // Создаем новый документ PDF
  var doc = new jsPDF();

  // Добавляем текст
  doc.text("Пример текста в PDF файле", 10, 10);

  // Сохраняем документ как blob
  var pdfBlob = doc.output("blob");

  // Создаем ссылку на blob
  var pdfUrl = URL.createObjectURL(pdfBlob);

  // Создаем ссылку на PDF файл
  var link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "example.pdf";

  // Добавляем ссылку на страницу
  document.body.appendChild(link);

  // Задержка перед эмуляцией клика
  setTimeout(function () {
    // Эмулируем клик на ссылку для загрузки файла
    link.click();

    // Очищаем ссылку
    URL.revokeObjectURL(pdfUrl);

    // Удаляем ссылку со страницы
    document.body.removeChild(link);
  }, 100);
});