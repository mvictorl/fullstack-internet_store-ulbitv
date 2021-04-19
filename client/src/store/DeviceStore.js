import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
	constructor() {
		this._types = [
      {id: 1, name: 'Холодильники'},
      {id: 2, name: 'Смартфоны'},
      {id: 3, name: 'Ноутбуки'},
      {id: 4, name: 'Телевизоры'}
    ]
		this._brands = [
      {id: 1, name: 'Samsung'},
      {id: 2, name: 'Apple'}
    ]
		this._devices = [
      {id:1, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: 'https://icdn.lenta.ru/images/2020/10/22/15/20201022151630776/detail_af233b21da0abc6152c36f21200d79ad.jpg'},
      {id:2, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: 'https://img.5element.by/import/images/ut/goods/good_c95c3fb9-8df7-11ea-80c8-005056840c70/good_img_6ef3d7a0-8ed0-11ea-80c8-005056840c70.jpg'}
    ]
    this._selectedType = {}
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
	setSelectedType(type) {
	  this._selectedType = type
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
  get selectedType() {
    return this._selectedType
  }
}
