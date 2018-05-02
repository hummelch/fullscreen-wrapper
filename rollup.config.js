import typescript from 'rollup-plugin-typescript2';

export default {
    input: 'src/main.ts',
    output: {
        file: 'dist/fullscreenWrapper.min.js',
        format: 'cjs'
    },
    plugins: [
        typescript({tsconfig: "rollup-tsconfig.json" })
    ]
};