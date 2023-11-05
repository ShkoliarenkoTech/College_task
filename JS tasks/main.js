// ! ЗАДАНИЕ 1
const getRow = () => {
    let firstCount = 0;
    let secondCount = 0;
  
    let letter = prompt("Type the symbol to count");
    let firstRow = prompt("Type the first row");
    let secondRow = prompt("Type the second row");
  
    if (letter == null) {
      alert("Неверный символ");
      return;
    }
    if (firstRow == null || secondRow == null) {
      alert("Не введена первая или вторая строка");
      return;
    }
  
    for (let index = 0; index < firstRow.length; index++) {
      if (firstRow.charAt(index) == letter) {
        firstCount++;
      }
    }
    console.log(`Количество символов "${letter}" в первой строке:`, firstCount);
    for (let j = 0; j < secondRow.length; j++) {
      secondRow.charAt(j);
      if (secondRow.charAt(j) == letter) {
        secondCount++;
      }
    }
    console.log(`Количество символов "${letter}" во второй строке:`, secondCount);
  
    if (firstCount > secondCount) {
      console.log(`Больше символов "${letter}" в строке ${firstCount}`);
    } else if (firstCount < secondCount) {
      console.log(`Больше символов "${letter}" в строке ${secondCount}`);
    } else {
      console.log(
        `Символов "${letter}" одинаковое кол-во в строках ${firstCount} и ${secondCount}`
      );
    }
  };
  
  // getRow();
  
  // ! ЗАДАНИЕ 2
  function formattedPhone() {
    let phone = prompt("Введите номер");
    if (
      phone == null ||
      (phone.charAt(0) != "+" &&
        phone.charAt(0) != "3" &&
        phone.charAt(0) != "7") ||
      phone.length > 13
    ) {
      alert("Неверный номер");
      return;
    }
  
    let lenPhone = phone.length;
    let tt = phone.split("");
    if (lenPhone == 12 && phone.charAt(0) == "3") {
      tt.splice(0, "", "+");
      tt.splice(3, "", " (");
      tt.splice(7, "", ") ");
      tt.splice(11, "", "-");
      tt.splice(14, "", "-");
    } else if (lenPhone == 12) {
      tt.splice(2, "", " (");
      tt.splice(6, "", ") ");
      tt.splice(10, "", "-");
      tt.splice(13, "", "-");
    } else if (lenPhone == 13) {
      tt.splice(4, "", " (");
      tt.splice(7, "", ") ");
      tt.splice(11, "", "-");
      tt.splice(14, "", "-");
    } else if (lenPhone == 11 && phone.charAt(0) == "7") {
      tt.splice(0, "", "+");
      tt.splice(2, "", " (");
      tt.splice(7, "", ") ");
      tt.splice(11, "", "-");
      tt.splice(14, "", "-");
    }
    alert(tt.join(""));
  }
  
  // formattedPhone();