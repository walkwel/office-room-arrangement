module.exports.problem = (rows, coloums, users) => {
  // validate parameters
  if (!rows, !coloums, typeof users === 'undefined') {
    console.log(rows, coloums, users)
    throw 'invalid data'
  }
  // validate rows and columns length
  if (!rows || !coloums || (rows < 0 || coloums < 0)) {
    throw 'invalid parameters'
  }
  // validate passed users not be greater then required positions
  if (rows * coloums < users) {
    throw 'invalid users'
  }
  const unhappy1 = fillAlternate(rows, coloums, users);
  const unhappy2 = fillAlternate2(rows, coloums, users);
  const final = Math.min(unhappy1, unhappy2);
  return final;
}



function fillInitial(row, coloum) {
  let arr = new Array(row);
  for (i = 0; i < row; i++) {
    arr[i] = new Array(coloum);
    for (j = 0; j < coloum; j++) {
      arr[i][j] = "0";
    }
  }
  return arr;
}
function fillInBetween(row, coloum, arr, u, unhappy) {
  for (i = 0; i < row; i++) {
    for (j = 0; j < coloum; j++) {
      if (arr[i][j] == "0" && u > 0) {
        arr[i][j] = "1";
        u--;
        unhappy += 4;
      }
    }
  }
  return unhappy;
}
function fillCorners(arr, row, coloum, userCorners, unhappyCorners) {
  if (arr[0][0] === "0" && userCorners > 0) {
    arr[0][0] = "1";
    userCorners--;
    unhappyCorners += row == 1 ? 1 : 2;
  }

  if (arr[row - 1][0] === "0" && userCorners > 0) {
    arr[row - 1][0] = "1";
    userCorners--;
    unhappyCorners += coloum == 1 ? 1 : 2;
  }

  if (arr[0][coloum - 1] === "0" && userCorners > 0) {
    arr[0][coloum - 1] = "1";
    userCorners--;
    unhappyCorners += row == 1 ? 1 : 2;
  }

  if (arr[row - 1][coloum - 1] === "0" && userCorners > 0) {
    arr[row - 1][coloum - 1] = "1";
    userCorners--;
    unhappyCorners += coloum == 1 ? 1 : 2;
  }
  return { unhappyCorners, userCorners };
}
function fillSides(arr, row, coloum, userSides, unhappySides) {
  for (j = 0; j < coloum; j++) {
    if (userSides == 0) {
      break;
    }
    if (arr[0][j] === "0" && userSides > 0) {
      arr[0][j] = "1";
      userSides--;
      unhappySides += row == 1 ? 2 : 3;
    }
    if (arr[row - 1][j] === "0" && userSides > 0) {
      arr[row - 1][j] = "1";
      userSides--;
      unhappySides += row == 1 ? 2 : 3;
    }
  }
  for (i = 0; i < row; i++) {
    if (userSides == 0) {
      break;
    }
    if (arr[i][0] === "0" && userSides > 0) {
      arr[i][0] = "1";
      userSides--;
      unhappySides += coloum == 1 ? 2 : 3;
    }
    if (arr[i][coloum - 1] === "0" && userSides > 0) {
      arr[i][coloum - 1] = "1";
      userSides--;
      unhappySides += coloum == 1 ? 2 : 3;
    }
  }
  return { unhappySides, userSides };
}
function fillAlternate(row, coloum, user) {
  let unhappy = 0;
  let arr = fillInitial(row, coloum);
  let u = user;
  let cnt = 1;
  for (i = 0; i < row; i++) {
    for (j = 0; j < coloum; j++) {
      if (cnt % 2 == 0) {
        arr[i][j] = "1";
        u--;
      }
      cnt++;
      if (u == 0) {
        break;
      }
    }
  }
  let { unhappyCorners, userCorners } = fillCorners(
    arr,
    row,
    coloum,
    u,
    unhappy
  );
  unhappy = unhappyCorners;
  u = userCorners;
  if (u > 0) {
    let { unhappySides, userSides } = fillSides(arr, row, coloum, u, unhappy);
    unhappy = unhappySides;
    u = userSides;
  }
  if (u > 0) {
    unhappy = fillInBetween(row, coloum, arr, u, unhappy);
  }
  return unhappy;
}

function fillAlternate2(row, coloum, user) {
  let unhappy = 0;
  let arr = fillInitial(row, coloum);
  let u = user;
  let cnt = 1;
  for (i = 0; i < row; i++) {
    for (j = 0; j < coloum; j++) {
      if (cnt % 2 != 0) {
        arr[i][j] = "1";
        u--;
      }
      cnt++;

      if (u == 0) {
        break;
      }
    }
  }
  let { unhappyCorners, userCorners } = fillCorners(
    arr,
    row,
    coloum,
    u,
    unhappy
  );
  unhappy = unhappyCorners;
  u = userCorners;
  if (u > 0) {
    let { unhappySides, userSides } = fillSides(arr, row, coloum, u, unhappy);
    unhappy = unhappySides;
    u = userSides;
  }
  if (u > 0) {
    unhappy = fillInBetween(row, coloum, arr, u, unhappy);
  }
  return unhappy;
}
