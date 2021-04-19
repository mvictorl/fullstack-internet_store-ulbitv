import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
	constructor() {
		this._types = []
		this._brands = []
		this._devices = []
		makeAutoObservable(this)
	}

	setTypes(type) {
		this._types = type
	}

	setBrands(brand) {
		this._brands = brand
	}

	setDevices(device) {
		this._devices = device
	}

	get types() {
		return this._types
	}

	get brands() {
		return this._brands
	}

	get devices() {
		return this._devices
	}
}
