import { describe, test, expect } from 'vitest'

import { app } from '../../src/app.mjs'
import { respUtil } from '../../src/app-lib.mjs'

describe("oars file list", () => {
  const location = ''
  const apiOptions = {
  } 

	/**
	 * 
	 */
	test("show file list", async () => {
		const result = await app.service.list(location, apiOptions)
      .then(respUtil.json)
      
    const value = {
      "STATUS": "SUCCESS",
      "FILES": ["test.txt"]
    }

    expect(result).toEqual(value)
	})
})
