function gift() {
  const input = document.getElementById("myInput").value;
  const text = document.getElementById("text");

  let number = Math.floor(Math.random() * 1000);

  let money = Math.round(number) * 10;

  if (input != "") {
    text.style.color = "black";
    switch (input) {
      case "1119":
        text.innerHTML = "$" + money;
        break;
      case "2006":
        text.innerHTML = "MONEY";
        break;

      case "2007":
        text.innerHTML = "MONEY";
        break;

      case "2008":
        text.innerHTML = "MONEY";
        break;

      case "2009":
        text.innerHTML = "MONEY";
        break;

      case "0404":
        text.innerHTML = "MONEY";
        break;

      case "1020":
        text.innerHTML = "MONEY";
        break;

      case "0001":
        text.innerHTML = "MONEY";
        break;

      case "2022":
        text.innerHTML = "MONEY";
        break;

      case "2023":
        text.innerHTML = "MONEY";
        break;

      case "7480":
        text.innerHTML = "MONEY";
        break;

      case "5559":
        text.innerHTML = "MONEY";
        break;

      case "7777":
        text.innerHTML = "MONEY";
        break;

      case "1234":
        text.innerHTML = "MONEY";
        break;

      default:
        text.style.color = "red";
        text.innerHTML = "CODUL NU ESTE BUN!";
    }
  } else {
    text.style.color = "black";
    text.innerHTML = "";
  }
}
