function prepareEmail() {
    var subject = document.getElementById('subject').value;
    var body = document.getElementById('emailBody').value;

    // Encode subject and body for URL
    var encodedSubject = encodeURIComponent(subject);
    var encodedBody = encodeURIComponent(body);

    // Update mailto link
    var mailtoLink = "mailto:voluntarios.alegria.contato@gmail.com?subject=" + encodedSubject + "&body=" + encodedBody;
    document.getElementById('emailLink').href = mailtoLink;
  }