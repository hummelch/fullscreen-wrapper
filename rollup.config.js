import typescript from 'rollup-plugin-typescript2';
import uglify from 'rollup-plugin-uglify';

export default [{
    input: 'src/fullscreenWrapper.ts',
    output: {
        file: 'dist/fullscreenWrapper.min.js',
        format: 'iife',
        name: 'fullscreenWrapper'
    },
    plugins: [
        typescript({tsconfig: "rollup-tsconfig.json" }),
        uglify()
    ]
}, {
    input: 'src/fullscreenWrapper.ts',
    output: {
    file: 'dist/fullscreenWrapper.js',
        format: 'iife',
        name: 'fullscreenWrapper'

    },
    plugins: [
        typescript({tsconfig: "rollup-tsconfig.json" }),
    ]
}];