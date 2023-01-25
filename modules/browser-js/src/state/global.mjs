/**
 * Global Config Data
 */
const data = {
  requestType: `fetch`,
  file: null,
  // Misc. method for loading a file attachement.
  emailAttchmentUrl: 'https://mail.google.com/mail/u/0?ui=2&ik=xxxxxx&permmsgid=msg-f:yyyyyyyyyyyyy',

  // API Parameters: OARS
  oarsPath: import.meta.env.VITE_OARS_API,
	oarsKey: import.meta.env.VITE_OARS_PUBLIC_KEY,

	oarsProjectName: import.meta.env.VITE_OARS_PROJECT,

	oarsEnvApi: import.meta.env.VITE_OARS_API_ENV,
	oarsEnvDb: import.meta.env.VITE_OARS_DB_ENV,
}

export { data }

