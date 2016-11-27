var $name = $('#input-name');
var $url = $('#input-url');
var $button = $('#input-button');

$button.on('click', function() {
  addLink();
  countAll();
});

$('.booked-list').on('click', '.mark-read', function(){
  $(this).parent().toggleClass('read');
  $(this).parent().toggleClass('unread');
  countAll();
})

$('.booked-list').on('click', '.remove', function(){
  $(this).parent().remove();
  countAll();
})

function addLink() {
  $('ul').append(`
  <li class="unread">
  <span class='title'>${$name.val()}</span>
  <a href="${$url.val()}" target="_blank" class="url">${$url.val()}</a>
  <button class="remove">Remove</button>
  <input type='checkbox' class="mark-read"></input>
  </li>
  `);
}

function countAll() {
  $('.links-count').text('Number of links: ' + countLinks());
  $('.read-count').text('Number of read: ' + countRead());
  $('.unread-count').text('Number of unread: ' + countUnread());
}

function countLinks() {
  return $('li').length;
}

function countRead(){
  return $('.read').length;
}

function countUnread(){
  return $('.unread').length;
}
