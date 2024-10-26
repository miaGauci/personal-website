document.addEventListener("DOMContentLoaded", () => {
  const photoGrid = document.getElementById("photoGrid");

  const images = [
    'images/boat.jpeg',
    'images/capri_beach.jpg',
    'images/capri_rock.jpg',
    'images/goldenBay.jpeg',
    'images/gozo.jpeg',
    'images/gozo1.jpeg',
    'images/gozo2.jpeg',
    'images/marsascala.jpeg',
    'images/mountain.jpeg',
    'images/pool.jpeg',
  ];

  // Function to create a grid item
  function createGridItem(imagePath) {
    const div = document.createElement("div");
    div.classList.add("photo-item");

    const img = document.createElement("img");
    img.src = imagePath;
    img.alt = "Photography";
    div.appendChild(img);

    return div;
  }

  // Loop through the images array and create each grid item
  images.forEach(imagePath => {
    const gridItem = createGridItem(imagePath);
    photoGrid.appendChild(gridItem);
  });

  // Use imagesLoaded to ensure images are fully loaded before initializing Masonry
  imagesLoaded(photoGrid, () => {
    const msnry = new Masonry(photoGrid, {
      itemSelector: '.photo-item',
      columnWidth: '.photo-item',
      percentPosition: true,
      gutter: 8 // Reduced gap between images
    });
  });
});
