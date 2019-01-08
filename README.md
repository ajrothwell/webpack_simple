# webpack_simple_1

This repo imports the module exported by the repo rollup_simple_1 (https://github.com/ajrothwell/rollup_simple_1).

src/index.js then imports:

{ square } from './localFunctions.js'

{ multiply } from 'rollup_simple_1'

{ double } from 'rollup_simple_1'

{ barfunc } from 'rollup_simple_1'

this leaves behind, unimported:

{ cube } from './localFunctions.js'

{ foofunc } from 'rollup_simple_1'

It can be seen in action live at https://ajrothwell.github.io/webpack_simple_1/dist/
