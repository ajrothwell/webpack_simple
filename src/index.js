import { square } from './fun';
import { multiply } from 'rollup_simple_3';
import { double } from 'rollup_simple_3';
import { barfunc } from 'rollup_simple_3';

// console.log('multiply:', multiply);

document.getElementById('test').innerHTML = square(10);
document.getElementById('test2').innerHTML = multiply(12);
document.getElementById('test3').innerHTML = barfunc();
document.getElementById('test4').innerHTML = double(5);
