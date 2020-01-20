 let money = +prompt('Ваш бюджет на месяц?');
 let time = prompt('Введите дату в формате YYYY-MM-DD"');

 let appData = {
     money: money,
     timeData: time,
     expenses: {},
     optionalExpenses: {},
     income: [],
     savings: false
 };

 for (let i = 0; i < 2; i++) {
     let q = prompt('Введите обязательную статью расходов в этом месяце'),
         a = +prompt('Во сколько обойдется?');

     if ((typeof (q) === 'string') && (typeof (q) != null) && (typeof (a) != null) &&
         a != '' && q != '' && a.length < 50) {
         appData.expenses[q] = a;
     } else {
         console.log("Написал дичь какую-то");
     }
 };

//  let i = 0;
//  while (i < 2) {
//      let q = prompt('Введите обязательную статью расходов в этом месяце'),
//          a = prompt('Во сколько обойдется?');

//      if ((typeof (q) === 'string') && (typeof (q) != null) && (typeof (a) != null) &&
//          a != '' && q != '' && a.length < 50) {
//          appData.expenses[q] = a;
//      } else {
//          console.log("Написал дичь какую-то");
//      }
//      i++;
//  };

//  let i = 0;
//  do {
//     let q = prompt('Введите обязательную статью расходов в этом месяце'),
//          a = prompt('Во сколько обойдется?');

//      if ((typeof (q) === 'string') && (typeof (q) != null) && (typeof (a) != null) &&
//          a != '' && q != '' && a.length < 50) {
//          appData.expenses[q] = a;
//      } else {
//          console.log("Написал дичь какую-то");
//      }
//      i++;
//  }
//  while (i < 2);

 appData.moneyPerDay = appData.money / 30

 alert('Ежедневный бюджет: ' + appData.moneyPerDay);

 if (appData.moneyPerDay < 100) {
     console.log("Минимальный уровень достатка");
 } else if (appData.moneyPerDay < 2000) {
     console.log("Средний уровень достатка");
 } else if (appData.moneyPerDay > 2000) {
     console.log("Высокий уровень достатка");
 } else {
     console.log("Ошибка");

 }