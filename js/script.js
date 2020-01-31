let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

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
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.money / 30).toFixed();
        alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Ошибка");
        };
    },
    checkSavings: function() {
        if (appData.savings) {
            let save = +prompt("Какая сумма накоплений"),
               percent = +prompt('Под какой процент?');
   
           appData.monthIncome = save/100/12*percent;
           alert('Доход в месяц с депозита: ' + appData.monthIncome)
        }
    },
    chooseOptExpenses: function() {
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
    }, 
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)');

        if ((typeof (items) === 'string') && (typeof (items) != null) && items != '' && items.length < 50) {
            appData.income = items.split(',');
        }
        
        appData.income.push(prompt('Может что-то еще?'));
        appData.income.sort();

        appData.income.forEach(function(elem, i) {
            alert('Способы зароботка: ' + elem);
        });

        
        console.log(" Наша программа включает в себя данные: ");
        for (let elem in appData) {
            console.log(elem);
            
        }
        

    }
};

