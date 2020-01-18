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

 q1 = prompt('Введите обязательную статью расходов в этом месяце');
 a1 = prompt('Во сколько обойдется?');

 appData.expenses.q1 = a1;

 q2 = prompt('Введите обязательную статью расходов в этом месяце');
 a2 = prompt('Во сколько обойдется?');

 appData.expenses.q2 = a2;


alert(appData.money/30);  