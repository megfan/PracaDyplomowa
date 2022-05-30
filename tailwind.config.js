module.exports = {
    purge: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            roboto: ['"Roboto Slab"', 'sans-serif'],
            quick: ['"Quicksand"', 'sans-serif'],
            lato: ['"Lato"', 'sans-serif']

        },
        extend: {
            backgroundColor: {
                'basic': '#4A4E5E',
                'dark': '#21252c',
                'greenMedium': '#2c3340',
                'greenLight': '#3d4656',
                'green': '#5fd9d0',
                'blueTxt': '#689d94',
                'blue': '#0f1014',
            },
            borderColor: {
                'greenMedium': '#2c3340',
                'greenDark': '#21252c',
                'greenLight': '#303642',
            },
            textColor: {
                'blueTxt': '#48b1a9',
                'greenTxt': '#48b1a9',
                'darkTXT': '#21252c',
            },
            ringColor: {
                'greenLight': '#283a36',
                'greenDark': '#1c2728',
            },
            borderRadius: {
                radiusSmall: '1rem',
            },
            animation: {
                'backgrounInMoveMainChicken' : 'backgrounInMoveMainChicken 20s ease-in-out infinite',
                'backgrounInMoveMainDuck' : 'backgrounInMoveMainDuck 20s ease-in-out infinite',
                'backgrounInMoveInfo' : 'backgrounInMoveInfo 20s ease-in-out infinite',
                'backgrounInMoveInfoHalfScreen' : 'backgrounInMoveInfoHalfScreen 20s ease-in-out infinite',
            },
            keyframes: {
                'backgrounInMoveMainChicken': {
                    '0%': {
                        backgroundPosition: '20% 10%',
                        backgroundSize: '160%',
                    },
                    '50%': {
                        backgroundPosition: '40% 10%',
                        backgroundSize: '200%',
                    },
                    '100%': {
                        backgroundPosition: '20% 10%',
                        backgroundSize: '160%',
                    },
                },
                'backgrounInMoveMainDuck': {
                    '0%': {
                        backgroundPosition: '10% 80%',
                        backgroundSize: '110%',
                    },
                    '50%': {
                        backgroundPosition: '10% 40%',
                        backgroundSize: '110%',
                    },
                    '100%': {
                        backgroundPosition: '10% 80%',
                        backgroundSize: '110%',
                    },
                },
                'backgrounInMoveInfo': {
                    '0%': {
                        backgroundPosition: '260% -30%',
                        backgroundSize: '86%',
                    },
                    '50%': {
                        backgroundPosition: '200% -30%',
                        backgroundSize: '80%',
                    },
                    '100%': {
                        backgroundPosition: '260% -30%',
                        backgroundSize: '86%',
                    },
                },
                'backgrounInMoveInfoHalfScreen': {
                    '0%': {
                        backgroundPosition: '0 50%',
                        backgroundSize: '110%',
                    },
                    '50%': {
                        backgroundPosition: '40% 40%',
                        backgroundSize: '110%',
                    },
                    '100%': {
                        backgroundPosition: '0 50%',
                        backgroundSize: '110%',
                    },
                },
            },
        },
    },
    plugins: [],
}
