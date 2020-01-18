 let money = prompt('Ваш бюджет на месяц?');
 let time = prompt('Введите дату в формате YYYY-MM-DD"');
 let appData = {
     money: money,
     timeData: time,
     expenses: {},
     optionalExpenses: {},
     income: [],
     savings: false
 };

alert(appData.money/30);
  