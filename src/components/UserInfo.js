export default class UserInfo {
  constructor({ name, description }, infoSelector) {
    this._name = name;
    this._description = description;
    this._container = document.querySelector(infoSelector);
  }

  getUserInfo() {
    const infoObject = {};
    infoObject.name = this._container.querySelector(this._name).textContent;
    infoObject.description = this._container.querySelector(this._description).textContent;
    return infoObject;
  }

  setUserInfo(name, desc) {
    this._container.querySelector(this._name).textContent = name;
    this._container.querySelector(this._description).textContent = desc;
  }
}