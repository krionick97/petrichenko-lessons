'use strict';

let money, money_integer, time, a1, a2, a2_integer, appData, dayBudget;

money = prompt('Ваш бюджет на месяц?');
money_integer = parseInt(money, 10);
time = prompt('Введите дату в формате YYYY-MM-DD');
a1 = prompt('Введите обязательную статью расходов в этом месяце');
a2 = prompt('Во сколько обойдется?');
a2_integer = parseInt(a2, 10);

appData = {
  budget: money_integer,
  tiemData: time,
  expenses: {
    a1 : a2_integer
  },
  optionalExpenses: {},
  income: [],
  savings: false
}

console.log(appData.budget);
console.log(a1);
console.log(appData.expenses.a1);

dayBudget = (appData.budget - appData.expenses.a1) / 30;
console.log(dayBudget);

alert('Бюджет на один день составляет: ' + dayBudget);