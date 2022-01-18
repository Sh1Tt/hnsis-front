import Image from 'next/image'

import styles from '../../styles/Nav.module.css'

const NightModeSwitch = () => {

	function toggleMode()
	{
		const darkClass = `isNight`

		const background = document.getElementById( '__bg' )

		if ( background.classList.contains( darkClass ) )
		{
			background.classList.remove( darkClass )

			document.getElementById( '__lightmode' ).style.display = `none`
		
			document.getElementById( '__darkmode' ).style.display = `block`

		}
		else 
		{
			background.classList.add( darkClass )

			document.getElementById( '__darkmode' ).style.display = `none`

			document.getElementById( '__lightmode' ).style.display = `block`

		}

	}

	return (
		<div className={styles.nightMode}>
			<button onClick={e => toggleMode()} className={styles.nightModeSwitch}>
				<span className={styles.modeIcon} id="__darkmode">
					<Image alt="Dark-mode switch. Toggle Dark"  height={50} width={50} src="data:image/png;base64,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" />
				</span>
				<span className={styles.modeIcon} id="__lightmode">
					<Image alt="Dark-mode switch. Toggle light"  height={50} width={50} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAIGUlEQVR4nO2ZXWwcVxXH//87/pTrxHbrtR3H7mdKeUMEELQ0VfNRkFqatA1VH3hAldqnNJRCKRRRoAipoFJAKTyAKvEABVmkTSggIKQRcSsqtan6gKjSpoR4P7ye2V3PzuyO48Q7fx48Tncde7O7cfrC/KR5mHPPPfeco3vPvXcGiImJiYmJiYmJiYmJiYmJifk/g812kGRNn5y+MUS4E8RNAK4B0A+gfc29q89ZALMA/iPqFatiHRy5ZuSfJCvNGGk4AclkstssmIcAfQVAoklnPyhsiE+f4Zl9V1999elGOjSUgOlTqd0Cn4EwFomOUzhQMTpkQpM23SY5PDxcbtntFshmsz3hXDgmo40mxA4RuwBcHzVPAXx4w1UbXryQnboJkMTMVObbBJ+IdN8wMo8NXzX88sWHsPakTqW2GZgfANgMQAR/ODw+/DjJcLU+qyZAksmeyv4G1H0AzkL88vCVwz8nqWQyOdBeMbtC8k4CNwDYGNlySLwZCn/tPNP528s3Xe6tdZAXQhJnpjJ7BD4DoE3E8yNjI18gqZX0V01AdirzfYCPE5gNDe4Z2ThyJJlMdrfLegTg1wCsq+8JfJBP+fP+jzZt2jR/UVG1QPZUdhuI3wPqE/C9kfGRJ1bSWzEB06np3RQnACyI+szIxpEjuWRutMLKQUmbo56HIExUTGXSsqwUAIRhOGYq5mYI94LYfqmCiygDSAKYpOHE0OjQ35crZFPZbRD+AsAieM/Q2NB5NeG8BCSTye5Odh4XNEZyT2I08bMo+NewONXfYcgHEuOJo/W8c5LOLSHDXwLY1GqEzSDoH0bmgcRY4t1quZ2094r6KYCp4GzwoeW7w3kJsJP2Y6CeAvXG4IahT6RSqa5OdkwC2AziaMdC566+K/tmJSUA7AVwO94P8h0AfwKwj6RdTCYH5tFxAMTNAN4czCY+yY/x7FoEnM1me0zFXA+FtwPcC2BQQIGGuxIbEpPnEiPRSduvA9gs4tGh0aGnVzUqybLT9oydtpVL5bYCgJ2yv2mnbdlp+7h7yu2P9D4vydPqeJJ2A0AxWRyw0/a7dtqWk3ZWXIcXSz6fX2en7P122tZMeiZvJ+3rqttn0jPboxiyksyqhuyMvcXJOHIyzttLzjsZx3UyjuyMvaUq+LBO8EuES0lwpp1bI7uz+Xy+fvFsEUnGztj7o3HO26adjHPcyTiaSc/cVC2vyQbBnQRA6AAALJj5XQTWEzqU2JA4Gk3759DYAYoAnpM0ODgyeITEYQJ94Xx4X8tR1huMDNu62u4n4BC4NZfKbatuN8JBAmiD2VkjX2bkRpCAZQ4DgGjuBAkaayJS2Qugtwm/1gF4CAAkTIAEyduajK1hBgYGiqR5FiTYxntrGtvMIZAQufoMAHEtSchoCgBIfpgkwkq4VFTuaMGvOxZN8yhJgPhICzYaxljmJZIAsKVaHi6EUyRBw2ur5W01nWnWA4CkDADQcAMAqF3pSKWmc4NcBwBhW5hqUxsIDrdgo2EWuHDCogUsbtnnULvSFAGgr1q+YkVklMIVWPE4eQEEAJZlmer3S4UxZsn3mvN/1fi1+tUvJF2S6ETnSPSeIYkudo1GKu+14NN7ACBplIs1YKYFGw1jhdZ1JGFo0tXy9rB9JBrfrZYv3wXeI4mQ4TgAkPw3SYQIl9bTH1vw6SUAaFPblmgNvtWCjYYh+Lmo1tScVEMTXhnJT1TLlxfBVwEAwg4AkPSHqGWpou4D4DfhTzHq874N4W9N9G+KQqGwXtAeAAAxUdMY4jYAoPhKtbgmAcYyB6NpcjcAsIMHSBZJbvcd/xaSNoD70dg6FoD7SebcnLuV5FaSbsVUftdqgHUHk4wJza9IXmFoXu67oq/mMETyTpIwljlYz4jl5b0ZL++plCttAwAv533Dy3vy8t47xWJxINLbLalY5xToSrobADzPu9zLeSe8vCc/73/rUgRfKBTWe3nvhcjPnOu6NbuVm3dvi9qm6x6FAcAreI96BV9ewX9LktFJdXl57/VIdrQqCYOSnpR0TJIfPcckfVfSFeeCL/iTXsGXX/CPSVqzD6eO4/S6bvmj/qz/hFfwnci/nFfwPl2tJ8n4Bf+YV/Dl5UuPLLdz3nank+oqrS8dBzAOYm9vf+++IBeMVsy56/AJEA/29vceqeeg7/pbEeIXaO3s0DzCyxWr8mBfX1/NTlWaLT0s6ccE/9vT33MDyZqPMyvu98FscFeIcD+ACojPXtZ32eEgF4yGVvgigI9HaodJToQL4eRcOJcEgG6re9xY5mZJ9wLYuvZRVjvOkqApSZMwmOjt6z3vAlRySzsg/BmLH0Tu6unvWX39L8efLT9ZcssqueXZkrtYDyR1ldzS1xdlZdV/Aq/slh+X1Ll2YTdOyS3tWPLTny1/p2kDklgqBs+Xi4HKxeBsUAz2LhUQ13X7S97cF8tu8EJQDN4uFwO/XAzK5WJwsuwF+8tu+UHHUTOXpjVDkgmKwcPlYnC2XAwUFINfS2r6B9CSMQZu8FhQDCpBMdBcce5fZa/cyoXoA+G0e3p7UAyOBYuBh4EXPHWhqt9QZgIvuAvkTyCMR6J3AR4wIQ7RMNlxuiPFBEsXHUETyNZlZ7rPjKmisdBgB6BdiC5eAE4J5ks96zovuOYbnhqSuubK83sofBXAUIt+X2qyIp7u7ul8dnm1X41Wfo6aOX/uU8aYnRRvEnQtFn+OdjRr6yKZB+BicVt+NQzDg9293a/V+wsUExMTExMTExMTExMTExMTEwPgf3SnmCsUsgexAAAAAElFTkSuQmCC" />
				</span>
			</button>
		</div>
	)

}

export default NightModeSwitch