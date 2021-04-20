import { makeAutoObservable } from 'mobx'

export default class UserStore {
	constructor() {
		this._isAuth = true
		this._user = {}
		makeAutoObservable(this)
	}

	setIsAuth(flag) {
		this._isAuth = flag
	}

	setUser(user) {
		this._isAuth = user
	}

	get isAuth() {
		return this._isAuth
	}

	get user() {
		return this._user
	}
}
