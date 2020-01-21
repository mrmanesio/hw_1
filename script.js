let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?');
    time = prompt('Введите дату в формате YYYY-MM-DD"');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?');
    }
}
 
start();

let appData = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let q = prompt('Введите обязательную статью расходов в этом месяце'),
            a = prompt('Во сколько обойдется?');
    
        if ((typeof (q) === 'string') && (typeof (q) != null) && (typeof (a) != null) &&
            a != '' && q != '' && a.length < 50) {
            appData.expenses[q] = a;
        } else {
            console.log("Написал дичь какую-то");
            i--;
        }
    };
}

chooseExpenses();

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


function detectDayBudget() {                                                            //функция расчета дневного бюджета
    appData.moneyPerDay = (appData.money / 30).toFixed();
    alert('Ежедневный бюджет: ' + appData.moneyPerDay);
}

function detectLevel() {                                                                //функция определеия уровня достатка
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Ошибка");
    }
}

function checkSavings() {                                                               //функция определеия накоплений
     if (appData.savings) {
         let save = +prompt("Какая сумма накоплений"),
            percent = +prompt('Под какой процент?');

        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с депозита: ' + appData.monthIncome)
     }
}

function chooseOptExpenses() {                                                          //функция определеия необязательных расходов
    for (let i=0; i<3; i++) {
        let q = prompt('Введите обязательную статью расходов в этом месяце'),
            a = prompt('Во сколько обойдется?');
    
        if ((typeof (q) === 'string') && (typeof (q) != null) && (typeof (a) != null) &&
            a != '' && q != '' && a.length < 50) {
            appData.optionalExpenses[q] = a;
        } else {
            console.log("Написал дичь какую-то");
            i--;
        }
    }
}

checkSavings();