import { com } from "../dom-lib"

const api = import.meta.env.VITE_OARS_API
const project = import.meta.env.VITE_OARS_PROJECT
const dbEnv = import.meta.env.VITE_OARS_DB_ENV
const apiEnv = import.meta.env.VITE_OARS_API_ENV
const key = import.meta.env.VITE_OARS_PUBLIC_KEY


export const appConfig = com((element) => {
  const update = () => {
    element.innerHTML = template
  }
  
	update()
})

const template = `
  <div style="text-align: left; width: 450px">
		<h3> App Config Parameters (from .env)</h3>
		<ul style="text-align: left">
			<li><span>API</span>: ${api}</li>
			<li><span>Project</span>: ${project}</li>
			<li><span>DB Env</span>: ${dbEnv}</li>
			<li><span>API Env</span>: ${apiEnv}</li>
			<li><span>Public Key</span>: <pre>${key}</pre></li>
		</ul>
  </div>
`

