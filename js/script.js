
var catalogItems = Array.prototype.slice.call(document.querySelectorAll('.item'));

catalogItems.forEach(function(catalogItem) {
  var item = catalogItem;
  var btn = catalogItem.querySelector('.item__order-link');
  var card = catalogItem.querySelector('.item__card');

  card.addEventListener('click', function() {
  if (item.classList.contains("item--disabled")) {
    return false;
  }
  if (item.classList.contains("item--hover")) {
    item.classList.remove("item--hover");
    item.classList.add('item--selected');
    card.classList.remove("item__card--hover");
    card.classList.add('item__card--selected');
  }
  if (item.classList.contains("item--selected")) {
    item.classList.remove("item--selected");
    item.classList.add('item--default');
    card.classList.remove("item__card--selected");
    card.classList.add('item__card--default');
  }
  else {
    item.classList.remove("item--default");
    item.classList.add('item--selected');
    card.classList.remove("item__card--default");
    card.classList.add('item__card--selected');
  }
});

btn.addEventListener('click', function(event) {
  event.preventDefault();
  event.stopPropagation();
  if (item.classList.contains("item--disabled")) {
    return false;
  }
  if (item.classList.contains("item--default")) {
    item.classList.remove("item--default");
    item.classList.add('item--selected');
    card.classList.remove("item__card--default");
    card.classList.add('item__card--selected');
  }
});

card.addEventListener('mouseenter', function() {
    if (card.classList.contains('item--default')) {
      return false;
    }
    if (item.classList.contains('item--selected')) {
      item.classList.remove('item--selected');
      item.classList.add('item--hover');
      card.classList.remove('item__card--selected');
      card.classList.add('item__card--hover');
    }
  });

  card.addEventListener('mouseleave', function() {
    if (item.classList.contains('item--hover')) {
      item.classList.remove('item--hover');
      item.classList.add('item--selected');
      card.classList.remove('item__card--hover');
      card.classList.add('item__card--selected');
    }
  });
});
