import nodeResolve from '@rollup/plugin-node-resolve';

export default {
	input: 'src/entry.js',
	output: {file: 'dist/entry.js'},
	plugins: [nodeResolve()],
};
