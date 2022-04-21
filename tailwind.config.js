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
                'greenDark': '#1c2728',
                'greenMedium': '#253234',
                'greenLight': '#283a36',
                'greenTxt': '#689d94',
            },
            borderColor: {
                'greenMedium': '#253234',
                'greenDark': '#1c2728',
                'greenLight': '#283a36',
            },
            textColor: {
                'greenTxt': '#689d94',
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
