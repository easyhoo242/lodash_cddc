/**
 * @name pick
 * @param {object} obj
 * @param {Array<string> | string} keys
 * @description pick方法 从对象中取出想要的值
 * @return {object}
 */
// Takes an object and an array of keys
// Returns a new object with only the keys that exist on the original object
function pick(obj, keys) {
	// If the object is null or undefined, return an empty object
	if (obj == null) return {}

	// If the object is not an object, throw an error
	if (typeof obj !== 'object') {
		throw new TypeError('Expected an object')
	}

	// If the keys array is empty, return the original object
	if (keys.length === 0) return obj

	// If the keys array is not empty, check if it is a string or an array
	if (keys) {
		// If the keys array is a string, make it an array with one item
		if (typeof keys === 'string') {
			keys = [keys]
		}

		// If the keys array is not an array, throw an error
		if (!Array.isArray(keys)) {
			throw new TypeError('Expected an array of keys')
		}

		// Iterate through the keys array
		// For each key, if it exists on the original object, add it to the new object
		return keys.reduce((res, key) => {
			if (obj[key] !== undefined) {
				res[key] = obj[key]
			}
			return res
		}, {})
	}

	// If the keys array is empty, return the original object
	return obj
}

module.exports = { pick }
