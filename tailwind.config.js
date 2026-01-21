/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			coral: {
  				DEFAULT: '#D4967D',
  				light: '#E8B9A6',
  				dark: '#B87A62',
  				muted: '#E5CEC5'
  			},
  			sage: {
  				DEFAULT: '#3F4A49',
  				light: '#5A6968',
  				dark: '#2D3635',
  				muted: '#6B7A79'
  			},
  			cream: {
  				DEFAULT: '#F8F6F3',
  				dark: '#EDE9E3'
  			},
  			sand: {
  				DEFAULT: '#D5D0C8',
  				light: '#E8E5DE',
  				dark: '#C4BEB4'
  			},
  			warm: {
  				white: '#FEFDFB',
  				ivory: '#FAF9F6'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			serif: [
  				'var(--font-serif)',
  				'Cormorant Garamond',
  				'Georgia',
  				'serif'
  			],
  			sans: [
  				'var(--font-sans)',
  				'DM Sans',
  				'system-ui',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  			'display-xl': [
  				'5.5rem',
  				{
  					lineHeight: '1.05',
  					letterSpacing: '-0.02em'
  				}
  			],
  			'display-lg': [
  				'4.5rem',
  				{
  					lineHeight: '1.1',
  					letterSpacing: '-0.02em'
  				}
  			],
  			display: [
  				'3.5rem',
  				{
  					lineHeight: '1.15',
  					letterSpacing: '-0.01em'
  				}
  			],
  			headline: [
  				'2.5rem',
  				{
  					lineHeight: '1.2',
  					letterSpacing: '-0.01em'
  				}
  			]
  		},
  		spacing: {
  			'18': '4.5rem',
  			'22': '5.5rem',
  			'30': '7.5rem'
  		},
  		animation: {
  			'fade-in': 'fadeIn 0.8s ease-out forwards',
  			'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
  			'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
  			'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
  			'slide-in-right': 'slideInRight 0.8s ease-out forwards',
  			'scale-in': 'scaleIn 0.6s ease-out forwards',
  			float: 'float 6s ease-in-out infinite',
  			shimmer: 'shimmer 2s linear infinite',
  			reveal: 'reveal 1s ease-out forwards',
  			draw: 'draw 1.5s ease-out forwards'
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			fadeInUp: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(30px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			fadeInDown: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(-20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			slideInLeft: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateX(-40px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateX(0)'
  				}
  			},
  			slideInRight: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateX(40px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateX(0)'
  				}
  			},
  			scaleIn: {
  				'0%': {
  					opacity: '0',
  					transform: 'scale(0.95)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'scale(1)'
  				}
  			},
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-10px)'
  				}
  			},
  			shimmer: {
  				'0%': {
  					backgroundPosition: '-200% 0'
  				},
  				'100%': {
  					backgroundPosition: '200% 0'
  				}
  			},
  			reveal: {
  				'0%': {
  					clipPath: 'inset(0 100% 0 0)'
  				},
  				'100%': {
  					clipPath: 'inset(0 0 0 0)'
  				}
  			},
  			draw: {
  				'0%': {
  					strokeDashoffset: '1000'
  				},
  				'100%': {
  					strokeDashoffset: '0'
  				}
  			}
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  		},
  		boxShadow: {
  			soft: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
  			'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 20px 25px -5px rgba(0, 0, 0, 0.05)',
  			'soft-xl': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
  			'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.02)',
  			glow: '0 0 40px rgba(212, 150, 125, 0.3)'
  		},
  		transitionTimingFunction: {
  			smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
  			'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)'
  		},
  		backdropBlur: {
  			xs: '2px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
