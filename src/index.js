import { square } from './localFunctions.js';
import { multiply } from 'rollup_simple_1';
import { double } from 'rollup_simple_1';
import { barfunc } from 'rollup_simple_1';

document.getElementById('square-value').innerHTML = square(10);
document.getElementById('multiply-value').innerHTML = multiply(12);
document.getElementById('barfunc-value').innerHTML = barfunc();
document.getElementById('double-value').innerHTML = double(5);
