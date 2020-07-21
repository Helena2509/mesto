export default class UserInfo {
  constructor({ name, description, avatar, _id }, infoSelector) {
    this._name = name;
    this._description = description;
    this._container = document.querySelector(infoSelector);
    this._avatar = avatar;
    this._id = _id;
  }

  getUserInfo() {
    const infoObject = {};
    infoObject.name = this._container.querySelector(this._name).textContent;
    infoObject.description = this._container.querySelector(
      this._description
    ).textContent;
    infoObject.avalink = this._container.querySelector(this._avatar).src;
    infoObject._id = this._id;
    return infoObject;
  }

  setUserInfo(name, desc, avalink, id) {
    this._container.querySelector(this._name).textContent = name;
    this._container.querySelector(this._description).textContent = desc;
    this._container.querySelector(this._avatar).src = avalink;
    this._id = id;
  }
}
