var $name = $('#input-name');
var $url = $('#input-url');
var $button = $('#input-button');

$button.on('click', function() {
  addLink();
});

function addLink() {
  $('ul').append(`
  <li class="unread">
  <span class='title'>${$name.val()}</span>
  <a href="${$url.val()}" target="_blank" class="url">${$url.val()}</a>
  <button>Remove</button>
  <input type='checkbox'></input>
  </li>
  `);
}


//
// function addLink() {
//     $('ul').append(`
//    <li class="unread">
//    <span class='title'>${$title.val()}</span>
//    <a href="${$url.val()}" target="_blank" class='url'>${$url.val()}</a>
//    <button class='remove'>Remove</button>
//    <input type='checkbox' class='markAsRead'></input>
//    </li>
//  `);
// }
