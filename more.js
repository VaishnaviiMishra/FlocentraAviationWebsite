document.addEventListener('DOMContentLoaded', function() {
  const loadMoreButton = document.getElementById('loadMore');
  const showLessButton = document.getElementById('showLess');
  const serviceContents = document.querySelectorAll('.service_content');
  let visibleItems = 4;

  // Initially show the first 4 items
  for (let i = 0; i < visibleItems; i++) {
    if (serviceContents[i]) {
      serviceContents[i].classList.add('visible');
    }
  }

  // Show more items on clicking the Load More button
  loadMoreButton.addEventListener('click', function() {
    for (let i = visibleItems; i < visibleItems + 4; i++) {
      if (serviceContents[i]) {
        serviceContents[i].classList.add('visible');
      }
    }
    visibleItems += 4;

    // Hide the Load More button if all items are visible
    if (visibleItems >= serviceContents.length) {
      loadMoreButton.style.display = 'none';
    }

    // Display the Show Less button
    showLessButton.style.display = 'inline-block';
  });

  // Show less items on clicking the Show Less button
  showLessButton.addEventListener('click', function() {
    for (let i = visibleItems - 1; i >= visibleItems - 4; i--) {
      if (serviceContents[i]) {
        serviceContents[i].classList.remove('visible');
      }
    }
    visibleItems -= 4;

    // Hide the Show Less button if only initial items are visible
    if (visibleItems <= 4) {
      showLessButton.style.display = 'none';
    }

    // Always display the Load More button
    loadMoreButton.style.display = 'inline-block';
  });
});

