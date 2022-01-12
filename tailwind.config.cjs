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
        fontFamily: {
            body: [`'Jones*'`, 'sans-serif']
        },
        extend: {
            colors: {
                'body': '#FEF2EC'
            },
            backgroundImage: {
                events: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(254,242,236,1) 100%)',
                'events-dark': 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(34,24,28,1) 100%)'
            }
        }
    },
    plugins: []
}
