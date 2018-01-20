
export default (expenses => {
    return expenses
        .map(expense => expense.amount)
        .reduce((s, v) => s + v, 0);
});
