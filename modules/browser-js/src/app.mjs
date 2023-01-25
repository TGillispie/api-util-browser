// ToDo: This is really just a list of service calls. It should
// hold its own state, in src/state.

// App
import { service as OarsService } from './service/oars.mjs'

// Configure App
const app = {}
app.service = OarsService

export { app }

