(function() {
  var button = document.querySelector('button');
  var main = document.querySelector('main');
  var loading = document.querySelector('.loading');

  // The challenge is to fill in this method to force a reflow. This will
  // make the loading element display while a subsequent reflow occurs to
  // draw all of the squares
  function forceReflow() {

  }

  // Makes the loading element visible
  // Feel free to change this logic if you need to!
  function showLoading() {
    loading.classList.add('show');
  }

  var divTemplate = document.createElement('div');
  divTemplate.classList.add('cell');
  function renderSquares() {
    // Using a fragment isn't strictly necessary, as modern browsers seem to batch
    // writes to the DOM. But I added it just in case!
    var fragment = document.createDocumentFragment();
    for (var i = 0; i <= 20000; i++) {
      fragment.appendChild(divTemplate.cloneNode(false));
    }
    main.appendChild(fragment);
  }

  // When the button is clicked, we:
  // 1. Display the loader
  // 2. Force a reflow so that the browser actually does show it
  // 3. Render a bajillion cells
  button.addEventListener('click', function() {
    showLoading();
    forceReflow();
    renderSquares();
  });
})();