'use strict';

const store = {};

const Loka = {

	store() {
		return store;
	},

	set(key, value) {
		return store[key] = value;
	},

	get(key) {
		return store[key];
	},

	update(key, value) {
		if ( typeof store[key] === 'object' ) {
			const updated = Object.assign( {}, store[key] || {}, value );
			return store[key] = updated;
		}
		return store[key] = value;
	},

	delete(key, path=null) {
		if ( path ) {
			return delete store[key][path];
		}
		return delete store[key];
	},

}

module.exports = Loka;
