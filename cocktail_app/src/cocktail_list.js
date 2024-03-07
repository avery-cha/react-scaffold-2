import React from 'react';

var defaultList = [];

const cocktailList = async () => {
  await fetch('http://localhost:3001/')
  .then(response => response.json())
  //.then(data => console.log(data))
  .then( data => {
    //Aviation, Clover Club, Gin and Tonic, Long Island, Tom Collins
    var a = data['drinks'];
    defaultList.push(<li>{a[17].strDrink}</li>);
    defaultList.push(<li>{a[28].strDrink}</li>);
    defaultList.push(<li>{a[43].strDrink}</li>);
    defaultList.push(<li>{a[66].strDrink}</li>);
    defaultList.push(<li>{a[97].strDrink}</li>);
    })
    return(
      defaultList
    )

  // fetch('http://localhost:3001/search/lemon')
  // .then(response => response.json())
  // .then(data => console.log(data)
}


export default cocktailList;
