const websites = [
	{
		name: "Netflix",
		link: "https://netflix.com/browse",
		svg: () => (
			<img height={71} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAESElEQVR4nO2aT2hcVRTGvzOdNsVUK6a02CQIBd1YiQXryo1LQ0JXBopkosWFIC4atFpqy7TEiBFiV25HS0RxFWO7sOBSkCi0UAOCUAT/BKS0jU6gmbn3fi5MQ/ryJnPunfsyo74f3M3kvHe/nHfPueee94CcnJycnJycnP8p4mPMs28OkxgHcBhAdzaSglkGMC9w01J+/6L2IrUD6mdOTApwMkjaFkPgne3npt7W2KocYE69PkyROQA1EKeL22VGylO/t6QyMiyf2G8MRgGeA7BDgOHiRPOVUNTc3DkZpwCAnOmanJpqUWsmrD6Q91ZOviEQvCvEcQBNHVDQ3NySTzlHGNQutCo0a4zUP3aOsORhjb3KASR2kUD35PnF1uRlT/fk+UUSIHG/xl4ZAmxN1RbjozdTB7jF31IvFMtD0td3NcX+ZwCPJH8vPNzrtV1HdwCdz/TrrjPpF5IcA7DBATTO6x9tOK+HXlUOcI5Bq4DGpg/rRrmwsGOjvZM0e1989CpDwFsDgMYrAECP7bpvEMDsvfY2ygrw0asMgbAcsOnTE4wh4QAYKzHSrY/ebEPAuobDGTdUvXZ93z3zWCdptr746FU6ICwMGuaAf0axaO4cTdhHygF6vToHkHAMSYJu82F5LGEvaXa++OjVVYIubCts6gBjn6jOLzy5zj6KA3z0ZloI0SqWr7FrNQFtrF2gU5Jg0xXggHU1QbQQiF0HhFeCqgTW89didRDAbKw6wEdvtiGgf3pjAGZjlcIZHIbChHhsYUPVL77dZ/9zlaC+iCnWhUfFMlIIdMhxeJMVYAFsS/z2YqyuQ/wQCFTWOAfIZYDPJX4cABDFBz5627UCPgKQdADg+Z6iERk0ROLmgJ6updkbKw/cEMieoBs3mzd+IRS2EzhjU4eMjNRo3KeN/p4c3vN66G1fHWBRId1rQTduQvRSOPwwlH4UBoC9Lw9eobVXmxyZg47DPnrbchZYo2YrqvOCJxk0REI7QjZ13KVuzAytXWlkl7TXEt0BsfsBd+kfH7kJ4+Zir4D4/YCAbhCgOwtY4yoCPh80QQN89LarLb5G350fv/q1+OgvAPrDZtmIj15lCDCoGNJkdSmXHY2dibsL6PW2pS2eRIyt0Dpq7WPqbUtbPEn/xEs/0dpvYq2Af0clmKTOCsFngiZK0EFvh+0tgVx3cH8AhSWAtwEspdkuL698vrNr22MAdgPyIOB2F1DYS/CA97yd0hM88MErD2ltH//w1SqAt4ImStAxH0i0i/iHIaJKApcPHdsfrGqL+Hqg1Lv6jdCfGnvtu8HvnCMsTKk1edlTE5ZWt8HvNfa6ELAyDfBZgGcvDZRgCrULR6581lEfSn45UOotkCVHlEGAwmnNdeoe3MWDoxMQngqXuHUQnBi+9slpja1XE3Lu4AtDII8D8jSAXUHqsqMKcJ5SmD7yw8yldovJycnJycnJyel4/gbqGLH3tB7VVwAAAABJRU5ErkJggg==" />				
		)
	},
	{
		name: "Youtube",
		link: "https://youtube.com",
		svg: () => (
			<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEWElEQVR4nO2aTW8bVRSG3zPjj5I2tOkUQZQZpAplkbq0WSCEWGWL6C8gOyQcEBISCPoRdxEpG5oukKpWUHdTJMovoIrEAnVVCalCqUITVSkbbARS7RRM6saO5x4WSRx34pm547mxHXEfaRbnnvfeOXN85syXAY1Go9FoNBpNPMYqN8pjlRulqL5ek1C1kFs/cLQTX69RmIB0R75eoy4BtYAEBPh6jbIENAJ+5SBfr1HZA6R9ryz+9C7BuA5gZGuoyIzsX6cm5gFgePFOGQD/+frEsXa2SnpyCojaC99g5+ABwGbgOoBXt/TPNU2vrRKVTbAIwLbu/sK7fbu0NgBsIG2xuUYpN1kC4LT4vXpVYe5CWQJEPZ1lGHmA7TDt9ilRmTixCgBH7iy19fvZKlGWgCcTmXm0/IqtDP7423NVEfYL78sKCMLbA+LaKulOAkJKOqqtki4lwKekv61YmzbJ6fcAZQmgm/UygLaXK7cGACjs2AeKANsElAL9N+vczq8SQ9VCLExmYcJnKzBTtql1KcvCLHbq12g0Go1GDRQu2eEKr6SN2j9TRPQegJMADu5NWJF5CuBXYrrVSA/mP6HRmuxE6QR8XV0YaYBvg3C6oxC7BWEhIejMRwPjf8jJJbjCK2muPv0ZoP4++B0WaGDgLZlKkLoVFmvrU4C5Xw4eAMZ57dkHAK6GCeUSIIzJ2CF1n0moSgAL44SfjwxhfXY4sxo0/2pl2aq58P0yRIawUmRQkKYDMjIi2Qo45OfbMMP7SAVAUvg/d30xNLYKAJfLD2XCkWVQRiRbAf4L1IzS3OOVpn32pVECgLnHKzuvwWrArjelEfezV8hWQOSFuzUnLn2VgPMvv9Y8nS4VV2xhJvIMvBN5oQhIRcnCkN7azak3Ehbc5DE/ux3n7NGiK1JTzXXYuC0aCXt6+DhNDx8n00067JrzMrHEToAQhvTWbs6M46xO23bZz95mtlAozxYKPFsolADg4shIYVuzIcwPLzpO8+7unG0XmcwpmVhiJyBuBXjHAuyjW2OWVzNj20UAuFa/x9fq93g7QXEroKs9wDsWZsvsO27jlEyAGXnhdnO8Y2F2u7GPU280G2XuUdkRwo0cWyux7wOizPGOhdlB+849KjsGizxzVyqgf06B3MPVzXsqFxCIXple+q0CygAsAOWwOal1Hlo3iYwkAp9DwpB6H3D+QUXmThYA8GXmRfLOEY2EM3d6oNiqyy1WHddo/O7nl9G0+oNiCUL5ZfDCcsW6sFyxWsfIFPmz96vN/w3kFqvOBou8n19G4/V3ehmUqoDP71f/JcD3ibAvIa5cPnXwcJhMsgfQEoPejB9VFyFaChfJfh1m8ztm7KsEMHBLRieVgPpgMm/+Ld4HeDxeWN2CFo4MGHkppeySn97lEWHyDwD6PQkLhktnvnqb1L0W32bmAaeerCHLjElsfhjpl8a4xsCiQfh+6BDyMxmqh0/RaDQajUbzf+c/f/INfUkN26QAAAAASUVORK5CYII=" />
		)
	},
	{
		name: "Namebase",
		link: "https://namebase.io",
		svg: () => (
			<svg width={48} height={48} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" clipRule="evenodd" d="M18.9629 4.59767C20.2023 4.59767 21.207 3.56845 21.207 2.29883C21.207 1.02922 20.2023 0 18.9629 0C17.7235 0 16.7188 1.02922 16.7188 2.29883C16.7188 3.56845 17.7235 4.59767 18.9629 4.59767Z" fill="url(#paint0_linear)" />
				<path d="M10.2107 2.81604C15.8499 2.81604 20.4214 7.49901 20.4214 13.2757V22.9308H14.1379V13.2757C14.1379 11.0539 12.3796 9.25278 10.2107 9.25278V2.81604Z" fill="#007FFF" />
				<path d="M10.2107 2.81604C4.5715 2.81604 0 7.49901 0 13.2757V22.9308H6.28352V13.2757C6.28352 11.0539 8.04179 9.25278 10.2107 9.25278V2.81604Z" fill="#FFB700" />
				<defs>
					<linearGradient id="paint0_linear" x1="14.613" y1="2.29162" x2="19.0604" y2="6.63317" gradientUnits="userSpaceOnUse">
						<stop stopColor="#FF5980" />
						<stop offset="1" stopColor="#FFA882" />
					</linearGradient>
				</defs>
			</svg>
		)
	},
	{
		name: "Google",
		link: "https://google.com/",
		svg: () => (
			<img width={62} height={62} src="data:image/png;base64,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" />
		)
	},
	{
		name: "Maps",
		link: "https://maps.google.com/",
		svg: () => (
				<img width={62} height={62} src="data:image/png;base64,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" />
		)
	},
	{
		name: "Twitter",
		link: "https://twitter.com/",
		svg: () => (
			<img width={62} height={62} src="data:image/png;base64,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" />
		)
	},
	{
		name: "CoinMarketCap",
		link: "https://coinmarketcap.com/",
		svg: () => (
			<svg viewBox="0 0 76.52 77.67" width={48} height={48} xmlns="http://www.w3.org/2000/svg">
				<path d="m66.54 46.41a4.09 4.09 0 0 1 -4.17.28c-1.54-.87-2.37-2.91-2.37-5.69v-8.52c0-4.09-1.62-7-4.33-7.79-4.58-1.34-8 4.27-9.32 6.38l-8.1 13.11v-16c-.09-3.69-1.29-5.9-3.56-6.56-1.5-.44-3.75-.26-5.94 3.08l-18.11 29.07a32 32 0 0 1 -3.64-14.94c0-17.52 14-31.77 31.25-31.77s31.3 14.25 31.3 31.77v.09s0 .06 0 .09c.17 3.39-.93 6.09-3 7.4zm10-7.57v-.17c-.14-21.35-17.26-38.67-38.29-38.67s-38.25 17.42-38.25 38.83 17.16 38.84 38.25 38.84a37.81 37.81 0 0 0 26-10.36 3.56 3.56 0 0 0 .18-5 3.43 3.43 0 0 0 -4.86-.23 30.93 30.93 0 0 1 -44.57-2.08l16.3-26.2v12.09c0 5.81 2.25 7.69 4.14 8.24s4.78.17 7.81-4.75l9-14.57c.28-.47.55-.87.79-1.22v7.41c0 5.43 2.18 9.77 6 11.91a11 11 0 0 0 11.21-.45c4.2-2.73 6.49-7.67 6.25-13.62z" fill="#EEE"/>
			</svg>
		)
	}
]

export default websites