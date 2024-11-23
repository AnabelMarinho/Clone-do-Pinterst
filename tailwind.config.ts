import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		colors: {
  			azul: 'var(--azul)',
  			vermelho: 'var(--vermelho)',
  			preto: 'var(--preto)',
  			branco: 'var(--branco)',
  			cinza: 'var(--cinza)',
  			cinzaMedio: 'var(--cinzaMedio)',
  			cinzaEscuro: 'var(--cinzaEscuro)',
  			border: 'hsl(var(--border))',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
