import typescript from 'rollup-plugin-typescript2';
import tslint from 'rollup-plugin-tslint';
import uglify from 'rollup-plugin-uglify';
import pkg from './package.json';

export default [
    // browser-friendly UMD build
    {
        input: 'src/index.ts',
        output: {
            file: pkg.main,
            format: 'umd'
        },
        name: 'autoHyphen',
        plugins: [
            typescript(),
            tslint(),
            uglify()
        ]
    }
]