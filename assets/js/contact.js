$('#contactForm').on('submit', (e) => {
  e.preventDefault();

  const name = $('#contactName').val().trim();
  const email = $('#email').val().trim();
  const phone = $('#phone').val().trim();
  const message = $('#message').val().trim();

  $('#sentSuccess').addClass('d-none');

  if ((name, email, phone, message)) {
    const data = { name, email, phone, message };
    $.post('/email', data, () => {
      $('#sentSuccess').removeClass('d-none');
    });
  }
});
