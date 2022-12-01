function gift() {
  const input = document.getElementById("myInput").value;
  const text = document.getElementById("text");

  let number = Math.floor(Math.random() * 1000);

  let money = Math.round(number) * 10;

  if (input != "") {
    text.style.color = "black";
    switch (input) {
      case "856":
        text.innerHTML = "$" + money;
        break;
      case "159":
        text.innerHTML = "Poți face facultatea de medicină COST: $20.000";
        break;

      case "369":
        text.innerHTML = "Poți face facultatea de contrucți COST: $15.000";
        break;

      case "236":
        text.innerHTML = "Poți face facultatea de electrician COST: $10.000";
        break;

      case "588":
        text.innerHTML = "Poți să te angajezi ca electrician Salariu: $3.000";
        break;

      case "258":
        text.innerHTML = "Poți să te angajezi ca constructor Salariu: $6.000";
        break;

      case "771":
        text.innerHTML = "Poți să te angajezi ca doctor Salariu: $9.000";
        break;

      case "0001":
        text.innerHTML = "Poți să te angajezi la salubritate Salariu: $1.000";
        break;

      case "2022":
        text.innerHTML = "Poți să te angajezi ca software developer (JAVA) Salariu: $10.000";
        break;

      case "2023":
        text.innerHTML = "Poți să participi la un curs de programare în JAVA COST: $15.000";
        break;

      case "5680":
        text.innerHTML = "Ai de plătit $5.000 asigurare";
        break;

      case "5559":
        text.innerHTML = "Ai de făcut un cadou de $3.000 la un alt jucător";
        break;

      case "7777":
        text.innerHTML = "+$15.000";
        break;

      case "1234":
        text.innerHTML = "-$5.000";
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
