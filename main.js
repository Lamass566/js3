let userData = Number(prompt("Enter number", "here..."));
let count = 0;

function calc (userData){
    for (let i = 1; i <= userData; i++) {
      if (i % 5 === 0) {
        count++;
        console.log(i);
      }
    }
    if(count === 0)
    {
      alert("Sorry, no numbers");
    }

    return userData;
  };

calc(userData);