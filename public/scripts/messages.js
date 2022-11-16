// Client facing scripts here

const createInboxElement = function (message) {
  const $message = $(`
    <div class="message-container">
     <img src="${message.photo_url}" class="item-picture">
       <div class="contact-container">
         <div class="user-name"> ${message.full_name} </div>
         <article>${message.message}</article>
       </div>
     <form class="reply" action="/compose-message" method="GET">
       <button type="submit" id="reply-button">Reply</button>
     </form>
    </div>
    `);

  return $message;
}

const renderMessages = function (messages) {
  for (const message of messages) {
    $('.inbox-container').append(createInboxElement(message));
  }
};

$(() => {
  function loadMessages() {
    $.get('/api/messages').then((result) => {
      console.log(result.details)
      renderMessages(result.details);
    });
  }
  loadMessages();
});
