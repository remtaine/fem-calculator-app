module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'fem-t1-bg': {
                    100: 'hsl(222, 26%, 31%)',
                    200: 'hsl(223, 31%, 20%)',
                    300: 'hsl(224, 36%, 15%)',
                },
                'fem-t1-keys': {
                    100: 'hsl(225, 21%, 49%)',
                    200: 'hsl(224, 28%, 35%)',
                    300: 'hsl(6, 63%, 50%)',
                    400: 'hsl(6, 70%, 34%)',
                    500: 'hsl(30, 25%, 89%)',
                    600: 'hsl(28, 16%, 65%)',
                },
                'fem-t1-text': {
                    100: 'hsl(221, 14%, 31%)',
                    200: 'hsl(0, 0, 100%)',
                },

                'fem-t2-bg': {
                    100: 'hsl(0, 0%, 90%)',
                    200: 'hsl(0, 5%, 81%)',
                    300: 'hsl(0, 0%, 93%)',
                },
                'fem-t2-keys': {
                    100: 'hsl(185, 42%, 37%)',
                    200: 'hsl(185, 58%, 25%)',
                    300: 'hsl(25, 98%, 40%)',
                    400: 'hsl(25, 99%, 27%)',
                    500: 'hsl(45, 7%, 89%)',
                    600: 'hsl(35, 11%, 61%)',
                },
                'fem-t2-text': {
                    100: 'hsl(60, 10%, 19%)',
                    200: 'hsl(0, 0, 100%)',
                },

                'fem-t3-bg': {
                    100: 'hsl(268, 75%, 9%)',
                    200: 'hsl(268, 71%, 12%)',
                },
                'fem-t3-keys': {
                    100: 'hsl(281, 89%, 26%)',
                    200: 'hsl(285, 91%, 52%)',
                    300: 'hsl(176, 100%, 44%)',
                    400: 'hsl(177, 92%, 70%)',
                    500: 'hsl(268, 47%, 21%)',
                    600: 'hsl(290, 70%, 36%)',
                },
                'fem-t3-text': {
                    100: 'hsl(52, 100%, 62%)',
                    200: 'hsl(198, 20%, 13%)',
                    300: 'hsl(0, 0, 100%)',
                },

            },
            fontFamily: {
                // 'redhat': ['Red Hat Display','sans-serif'],
                // 'inter': ['Inter', 'sans-serif'],
                'league-spartan': ['League Spartan', 'sans-serif'],
            },
        },
    },
    plugins: [],
}