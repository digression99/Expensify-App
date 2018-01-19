// action generators for filter

import moment from 'moment';

export const setTextFilter = (text = '') => ({
    type : 'SET_TEXT_FILTER',
    text
});

export const sortByAmount = () => ({type : 'SORT_BY_AMOUNT'});

export const sortByDate = () => ({type : 'SORT_BY_DATE'});

export const setStartDate = (date = undefined) => ({
    type : 'SET_START_DATE',
    date});
export const setEndDate = (date = undefined) => ({
    type : 'SET_END_DATE',
    date});

export const filtersReducerDefaultValue = {
    text : '',
    sortBy : 'date',
    startDate : moment().startOf('month'), // one month is a default.
    endDate : moment().endOf('month')
};