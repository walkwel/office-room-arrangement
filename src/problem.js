module.exports.problem = (rows, columns, users) => {
  // validate parameters
  if (!rows, !columns, typeof users === 'undefined') {
    throw 'invalid data'
  }
  // validate rows and columns length
  if (!rows || !columns || (rows < 0 || columns < 0)) {
    throw 'invalid parameters'
  }
  // validate passed users not be greater then required positions
  if (rows * columns < users) {
    throw 'invalid users'
  }
  const unhappy = findUnhappyUser(rows, columns, users);
  return unhappy;
}

const findUnhappyUser = (rows, coloums, users) => {
  let n = rows * coloums; // total number of seats

  /* check whether number of users are less or half as compared to seats */
  if(users <= Math.ceil(n/2)){
    return 0;
  }

  /* for one row or one column */
  if(rows==1 || coloums ==1){
    return (n%2==0) ? 2*(users - Math.ceil(n/2) - 1)+1 : 2*(users - Math.ceil(n/2));
  }
  
  let emptySideSeats= (rows/2)*2 + (coloums - 2);
  
  if(n%2 == 0){
    // In case of even no. of seats
    let halfNumberOfSeat= Math.ceil(n/2);
    let CornerSeats =  halfNumberOfSeat+2;
    if( users <= CornerSeats){
      return 2*(users - halfNumberOfSeat);
    }
    if ((users > CornerSeats) && (users - halfNumberOfSeat) <= emptySideSeats ){
      emptySideSeats = emptySideSeats - 2;
      return 3*(users - CornerSeats) + 4;
    }
    if((users > CornerSeats) && (users - halfNumberOfSeat) > emptySideSeats ){
      emptySideSeats = emptySideSeats - 2;
      return 3*(emptySideSeats) + 4 + 4*(users - CornerSeats -emptySideSeats);
    }
  } 
  else {
    // In case of odd no. of seats
    let CornerSeats = (rows%2!=0 && coloums%2!=0)?4:2;
    if(users === Math.ceil(n/2)+1){
      return 3;
    }
    if((users - Math.floor(n/2)) <= CornerSeats){
      return 2*(users - Math.floor(n/2));
    }
    if((users - Math.floor(n/2)) <= (emptySideSeats)){
      return 3*(users - Math.floor(n/2)- CornerSeats)+ 2*CornerSeats;
    }
    if((users -Math.floor(n/2)) > emptySideSeats){
      return 3*(emptySideSeats-CornerSeats) + 2*CornerSeats + 4*(users - Math.floor(n/2) -emptySideSeats) ;
    }
  }
}
