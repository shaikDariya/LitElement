import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve';
import inject from  'rollup-plugin-inject';
const isDev = process.env.BUILD === 'developemnt';
const extensions = ['js', 'ts'];
export default {
    input : ['./src/render.ts'],
    external: ['lit-element'],
    plugins: [
        resolve({
            extensions,
            mainFields: ['jsnext:main', 'module', 'main']
        }),
        commonjs(),
        babel({
            extensions,
            babelrc: false,
            presets:[
                '@babel/typescript'
            ],
            plugins:[
                ['@babel/plugin-proposal-decorators', {decoratorsBeforeExport: true}],
                "@babel/proposal-class-properties",
                "@babel/plugin-proposal-object-rest-spread"
            ],
        }),
        inject({platform: 'platform'}),
        serve({contentBase:'build', open: true})

    ],
    output:[{
        dir: 'build',
        format: 'system',
        sourcemap: true,
        chunkFileNames: '[name].js',
        exports:'named'
    }]

}