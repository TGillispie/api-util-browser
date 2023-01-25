// Alias for querySelector.
export const em = (selector) => document.querySelector(selector)
// DOM update wrapper: run or load a basic component.
export const com = (component) => {

  return (selector) => {
		const el = em(selector)
		if (! el) {
			return false
		}

		return component(em(selector))
	}
}

