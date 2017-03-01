'use strict';

const Loka = require('../src/Loka');
const chai = require('chai');
const expect = chai.expect;

const store = Loka.store();


describe('Loka', () => {

	it( 'should have `store` method', () => {
		expect(Loka).to.include.keys('store');
	});

	it( 'should have `set` method', () => {
		expect(Loka).to.include.keys('set');
	});

	it( 'should have `get` method', () => {
		expect(Loka).to.include.keys('get');
	});

	it( 'should have `update` method', () => {
		expect(Loka).to.include.keys('update');
	});

	it( 'should have `delete` method', () => {
		expect(Loka).to.include.keys('delete');
	});

});



describe('Loka.store', () => {

	it( 'should be an object', () => {
		expect(store).to.be.an('object');
	});

	it( 'should be empty when initialized', () => {
		expect(store).to.deep.equal({});
	});

});



describe('Loka.set', () => {

	it( 'should add a key `name` in store', () => {
		Loka.set('name','John Doe');
		expect(store).to.include.keys('name');
	});

});



describe('Loka.get', () => {

	it( 'should return the value of key `name` from store', () => {
		const value = Loka.get('name');
		expect(value).not.to.be.null;
	});

	it( 'should be equal to the value that was set', () => {
		const value = Loka.get('name');
		expect(value).to.be.a('string');
		expect(value).to.equal('John Doe');
	});

});



describe('Loka.update', () => {

	it( 'should update the value of the key `name` in store', () => {
		const value = Loka.update('name', 'Johnny Bravo');
		expect(value).not.to.be.null;
	});

	it( 'key `name` show match the updated value', () => {
		const value = Loka.get('name');
		expect(value).to.not.equal('John Doe');
		expect(value).to.equal('Johnny Bravo');
	});

});



describe('Loka.delete', () => {

	it( 'should delete the key `name` from store', () => {
		const value = Loka.delete('name');
		expect(store).to.not.include.keys('name');
	});

	it( 'the value of deleted key `name` should be undefined', () => {
		const value = Loka.get('name');
		expect(value).to.be.an('undefined');
	});

});



describe('Loka: get, set, update and delete object example', () => {

	const user = {
		name: 'John Doe',
		email: 'john.doe@gmail.com',
		gender: 'Unspecified',
		status: 'active',
		verified: true,
	}

	it( 'store:- should be empty', () => {
		expect(store).to.deep.equal({});
	});

	it( 'set:- should add a key `user` in store', () => {
		Loka.set('user',user);
		expect(store).to.include.keys('user');
	});

	it( 'get:- should return the value of key `user` from store', () => {
		const value = Loka.get('user');
		expect(value).not.to.be.null;
	});

	it( 'get:- the returned value must match the value that was set', () => {
		const value = Loka.get('user');
		expect(value).to.deep.equal(user);
	});

	describe( 'Updating the key `user`', () => {

		it( 'update:- should add new property `phone` on key `user`', () => {
			const value = Loka.update('user', { phone: '1234567890' });
			expect(value).to.include.keys('phone');
		});

		it( 'update:- should update the property `name` on key `user`', () => {
			const value = Loka.update('user', { name: 'Matt Murdock' });
			expect(value.name).to.equal('Matt Murdock');
		});

		it( 'update:- should add property `alias` and update property `email` on key `user`', () => {
			const value = Loka.update('user', { alias: 'Daredevil', email: 'dare@devil.com' });
			expect(value).to.include.keys('alias');
			expect(value.email).to.equal('dare@devil.com');
		});

	});

	describe( 'Deleting properties of the key `user`', () => {

		it( 'delete:- should delete the property `gender` on key `user`', () => {
			Loka.delete('user','gender');
			const value = Loka.get('user');
			expect(value).to.not.include.keys('gender');
		});

		it( 'delete:- should delete the property `email` on key `user`', () => {
			Loka.delete('user','email');
			const value = Loka.get('user');
			expect(value).to.not.include.keys('email');
		});

		it( 'delete:- should delete the key `user`', () => {
			Loka.delete('user');
			const value = Loka.get('user');
			expect(value).to.be.an('undefined');
		});

		it( 'store:- should be empty again!', () => {
			expect(store).to.deep.equal({});
		});

	});



});

