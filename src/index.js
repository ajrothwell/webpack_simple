import { square } from './localFunctions.js';
import { double } from 'rollup_simple_1';
import { triple } from 'rollup_simple_1';
import { barfunc } from 'rollup_simple_1';

document.getElementById('square-value').innerHTML = square(10);
document.getElementById('double-value').innerHTML = double(10);
document.getElementById('barfunc-value').innerHTML = barfunc();
document.getElementById('triple-value').innerHTML = triple(10);
