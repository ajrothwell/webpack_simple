# webpack_simple_1

This repo imports the module exported by the repo rollup_simple_1 (https://github.com/ajrothwell/rollup_simple_1).

src/index.js then imports:

{ square } from './localFunctions.js'

{ multiply } from 'rollup_simple_3'

{ double } from 'rollup_simple_3'

{ barfunc } from 'rollup_simple_3'

this leaves behind, unimported:

{ cube } from './localFunctions.js'

{ foofunc } from 'rollup_simple_3'

It can be seen in action live at https://ajrothwell.github.io/webpack_simple_1/dist/
