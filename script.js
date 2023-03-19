const white_board = document.querySelector(".white_box_content");
const leftArrow = document.querySelector("#left-arrow-arrow");
const rightArrow = document.querySelector("#right-arrow-arrow");

leftArrow.style.display = "none";
white_board.innerHTML =
  "<h2>About me</h2><p>I'm a student of 60th lyceum, where I'm studying in linguistic class. I find interesting studying and find something new. At the moment I'm studying IT because I want to connect my life with it. </p><h3 class='nmb'>1/3</p";
let i = 1;
leftArrow.addEventListener("click", () => {
  i--;
  if (i === 1) {
    leftArrow.style.display = "none";
    white_board.innerHTML =
      "<h2>About me</h2><p>I'm a student of 60th lyceum, where I'm studying in linguistic class. I find interesting studying and find something new. At the moment I'm studying IT because I want to connect my life with it.</p><h3 class='nmb'>1/3</h3>";
  } else if (i === 2) {
    leftArrow.style.display = "flex";
    rightArrow.style.display = "flex";
    white_board.innerHTML =
      "<h2>My hobbies</h2><ul><li><p>I'm studing in art school for 2 years.</p></li><li><p>I'm studying english and kazakh languages.</p></li><li><p>I used to do break-dancing since I was 4.</p></li><li><p>I used to do karate and box, but now I prefer more going to gym.</p></li></ul><h3 class='nmb'>2/3</h3>";
  } else if (i == 3) {
    white_board.innerHTML =
      "<h2>IT</h2><p>Starting from childhood, when I was a preschooler, the love to computers began to appear. And it didn't disappear, it was getting bigger and bigger. So now, to develop my IT skills I ask parents to buy me courses. At the moment I'm studying in 'Step' academy and at the same time passing the 'JavaScript' course.</p><h3 class='nmb'>3/3</h3>";
  }
});
rightArrow.addEventListener("click", () => {
  i++;
  if (i === 1) {
    white_board.innerHTML =
      "<h2>About me</h2><p>I'm a student of 60th lyceum, where I'm studying in linguistic class. I find interesting studying and find something new. At the moment I studying IT because I want to connect my life with it.</p><h3 class='nmb'>1/3</h3>";
  } else if (i === 2) {
    leftArrow.style.display = "flex";
    rightArrow.style.display = "flex";
    white_board.innerHTML =
      "<h2>My hobbies</h2><ul><li><p>I'm studing in art school for 2 years.</p></li><li><p>I'm studying english and kazakh languages.</p></li><li><p>I used to do break-dancing since I was 4.</p></li><li><p>I used to do karate and box, but now I prefer more going to gym.</p></li></ul><h3 class='nmb'>2/3</h3>";
  } else if (i == 3) {
    rightArrow.style.display = "none";
    white_board.innerHTML =
      "<h2>IT</h2><p>Starting from childhood, when I was a preschooler, the love to computers began to appear. And it didn't disappear, it was getting bigger and bigger. So now, to develop my IT skills I ask parents to buy me courses. At the moment I'm studying in 'Step' academy and at the same time passing the 'JavaScript' course.</p><h3 class='nmb'>3/3</h3>";
  }
});
