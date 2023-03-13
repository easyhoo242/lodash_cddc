const pick = require('./pick')

/**
 * @param {object} obj
 * @param {Array<string> | string} keys
 * @description 反向pick方法，从对象中排除想要的值
 * @returns object
 */
function omit(obj, keys) {
	if (obj === null) {
		return {}
	}

	if (typeof obj !== 'object') {
		throw new TypeError('Expected an object')
	}

	if (!keys) {
		return obj
	}

	if (typeof keys === 'string') {
		keys = [keys]
	}

	if (!Array.isArray(keys)) {
		throw new TypeError('Expected an array of keys')
	}

	if (keys.length === 0) {
		return obj
	}

	return Object.keys(obj).reduce((res, key) => {
		if (!keys.includes(key)) {
			res[key] = obj[key]
		}
		return res
	}, {})
}

// 用pick实现omit
function omit_2(obj, keys) {
	const _keys = Object.keys(obj)

	return pick.pick(
		obj,
		_keys.filter((key) => !keys.includes(key))
	)
}

const initObj = {
	a: 1,
	b: 2,
	c: 3
}

module.exports = { omit }
