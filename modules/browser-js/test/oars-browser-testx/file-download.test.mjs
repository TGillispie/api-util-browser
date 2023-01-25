import { describe, test, expect } from 'vitest'

import { app } from '../../src/app.mjs'
import { respUtil } from '../../src/app-lib.mjs'

describe("oars file download", () => {
	const filename = 'test.txt'
	const apiOptions = {}

	/**
	 * Test download a file.
	 */
	test("download file", async () => {
		const result = await app.service.download(filename)
			.then(respUtil.text)

		const value = 'Hello world!!!\nThis is a second line :)\nLets do a third, why not.\n'

		expect(result).toBe(value)
	})

	/**
	 * This is a place holder and has not be tested yet.
	 */
	test.skip("download file at path", async () => {
		const result = await app.service.download(filename, {
			getFileLocation: '/some/path'
		}).then(respUtil.text)

		const value = 'Hello world!!!\nThis is a second line :)\nLets do a third, why not.\n'
		
		expect(result).toBe(value)
	})
})
