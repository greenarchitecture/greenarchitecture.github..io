

$('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.grid-sizer',
    gutter: 10
  },
  filter: '.xd1'
})

$grid = $('.grid');

// layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});


// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });

  let listButton = $('.filter-button-group').children()
  for (let i = 0; i < listButton.length; i++) {
    listButton[i].classList.remove('filter-active')
  }
  // listButton.forEach(btn => {
  //   // btn.removeClass('filter-active')
  //   btn.classList.add('filter-active')
  // })

  $(this).addClass('filter-active')


});