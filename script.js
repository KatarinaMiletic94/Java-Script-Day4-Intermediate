/* const santaImages = [
  'https://cdn.shopify.com/s/files/1/1369/2605/articles/White_Gift_Box_with_Red_Bow_PNG_Image_2048x.png?v=1511752878',
  'https://juststickers.in/wp-content/uploads/2016/11/santa-claus.png',
  'https://cdn.shopify.com/s/files/1/1369/2605/articles/White_Gift_Box_with_Red_Bow_PNG_Image_2048x.png?v=1511752878',
  'https://cdn.shopify.com/s/files/1/1369/2605/articles/White_Gift_Box_with_Red_Bow_PNG_Image_2048x.png?v=1511752878',
  'https://juststickers.in/wp-content/uploads/2016/11/santa-claus.png',
  'https://cdn.shopify.com/s/files/1/1369/2605/articles/White_Gift_Box_with_Red_Bow_PNG_Image_2048x.png?v=1511752878',
  'https://juststickers.in/wp-content/uploads/2016/11/santa-claus.png',
  'https://cdn.shopify.com/s/files/1/1369/2605/articles/White_Gift_Box_with_Red_Bow_PNG_Image_2048x.png?v=1511752878',
  'https://juststickers.in/wp-content/uploads/2016/11/santa-claus.png',
];

function handleClick(event) {
  const clickedElement = event.target;

  if (
    clickedElement.src ===
    'https://juststickers.in/wp-content/uploads/2016/11/santa-claus.png'
  ) {
    clickedElement.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const santaGrid = document.getElementById('santaGrid');

  santaImages.forEach((imageUrl) => {
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'Santa Claus';
    img.classList.add('santa');
    santaGrid.appendChild(img);
  });

  santaGrid.addEventListener('click', handleClick);
});
 */
// Function to generate random RGB color
function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

function changeBackgroundColor() {
  const colorBox = document.getElementById('colorBox');
  const randomColor = getRandomColor();
  colorBox.style.backgroundColor = randomColor;
}

document
  .getElementById('colorButton')
  .addEventListener('click', changeBackgroundColor);
