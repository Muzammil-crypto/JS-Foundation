function leftSidedTriangle(n) {
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
  }
}
// leftSidedTriangle(5);

function starSquare(n) {
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
  }
}

// starSquare(5);

function HollowSquareStarPatternn() {
  for (let i = 1; i <= 5; i++) {
    if (i == 1 || i == 5) {
      console.log("****");
    } else {
      console.log("*  *");
    }
  }
}

function hollowSquareStarPattern(size) {
  const fullRow = "*".repeat(size);
  const hollowRow = size > 1 ? "*" + " ".repeat(size - 2) + "*" : "*";
  console.log(fullRow);
  for (let i = 1; i <= size - 2; i++) {
    console.log(hollowRow);
  }
  if (size > 1) {
    console.log(fullRow);
  }
}

// hollowSquareStarPattern(20);

function starDimond(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
  }
  for (let i = n; i >= 1; i--) {
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
  }
}

// starDimond(10);

function starDimond(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
  }
  for (let i = n; i >= 1; i--) {
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
  }
}

// using a single loop
function printDiamond(n) {
  for (let i = 1; i <= 2 * n - 1; i++) {
    let numStars = i <= n ? 2 * i - 1 : 2 * (2 * n - i) - 1;
    let numSpaces = i <= n ? n - i : i - n;

    let line = " ".repeat(numSpaces) + "*".repeat(numStars);
    console.log(line);
  }
}

printDiamond(5);
