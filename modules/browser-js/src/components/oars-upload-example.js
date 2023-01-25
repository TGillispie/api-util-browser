import { com } from "../dom-lib"

export const oarsUploadExample = com((element) => {
  const update = () => {
    element.innerHTML = template
  }
  
	update()
})


const template = `

  <div style="text-align: left; width: 450px">
		<h3> OARS Upload Example </h3>
    <div>This app uses ES6 modules.  Run the init function (found at the 
			bottom of the index.html file).  This loads a service (app) object and
			some response utils.
      <code>
<pre>
  init() // After running init in the 
         //  console: app and respUtil should be avail.
</pre>
      </code>
    </div>

    <div>
      Enter 'app.service' in the console to see a list of configured api calls.
    </div>

    <p>For the 'app.service.upload' request, create two parameters: an options object with filename and content-type, plus a filename parameter.
      <code>
				<pre>
  const options = {
    file: '{"msg": "test it, testing, tested"}',
    contentType: 'application/json',
  }
				</pre>
			</code>
		</p>
		<p>Call the upload api using the required parameters.
			<code>
				<pre>
  app.service.upload('test.json', options)
    .then(async (resp) => console.log(await respUtil.text(resp)))
				</pre>
    	</code>
    </p>

		<p>A successful response should be echoed in the console.
		<code>
			<pre>
  {"STATUS_CODE":"546","STATUS_MESSAGE":"File stored successfully","STATUS_TYPE":"SUCCESS"}
			</pre>
			<code>
		</p>

	</div>
`

