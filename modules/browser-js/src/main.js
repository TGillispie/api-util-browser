import { setupCounter } from './components/counter.js'
import { appRefs } from './components/app-refs'
import { appConfig } from './components/app-config'
import { oarsUploadExample } from './components/oars-upload-example'

import './assets/style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Basic Testing Ground for API</h1>
		<h2>Using mostly vanilla JS</h2>
		
		<div id="app-config"></div>

		<div id="oars-example"></div>
   	
		<h2>Built with:</h2>
		<div id="app-refs"></div>
  </div>
`

setupCounter('#counter')
appRefs('#app-refs')
appConfig('#app-config')
oarsUploadExample('#oars-example')

