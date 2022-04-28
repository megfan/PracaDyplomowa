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
                'greenDark': '#21252c',
                'greenMedium': '#2c3340',
                'greenLight': '#283a36',
                'greenTxt': '#7685a1',
                'blueTxt': '#689d94',
                'blue': '#0f1014',
            },
            borderColor: {
                'greenMedium': '#2c3340',
                'greenDark': '#21252c',
                'greenLight': '#303642',
            },
            textColor: {
                'blueTxt': '#689d94',
                'greenTxt': '#7685a1',
            },
            ringColor: {
                'greenLight': '#283a36',
                'greenDark': '#1c2728',
            },
            borderRadius: {
                radiusSmall: '1rem',
            },
            animation: {
                'backgrounInMoveMain' : 'backgrounInMoveMain 20s ease-in-out infinite',
                'backgrounInMoveInfo' : 'backgrounInMoveInfo 20s ease-in-out infinite',
            },
            keyframes: {
                'backgrounInMoveMain': {
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
                }
            },
        },
    },
    plugins: [],
}
