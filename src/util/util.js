export const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1);
}

export const getLastDayOfMonth = (year, month) => {
    return new Date(year, month + 1, 0);
}