/*
 *  TailwindCSS config file for learnwith.community project.
 *  Created On 10 January 2022
 */

module.exports = {
    darkMode: 'class',
    content: [
        './src/components/**/*.tsx',
        './src/components/**/*.svg',
        './src/index.html'
    ],
    theme: {
        extend: {
            colors: {
                'body': '#FEF2EC'
            }
        }
    },
    plugins: []
}
