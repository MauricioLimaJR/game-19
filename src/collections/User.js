import firebase from '../firebase/firebase'

/**
 * User DB Class
 */
class User {
  constructor() {
    const db = firebase.firestore()
    this.collection = db.collection("users")
  }

  async create(user) {
    /**
     * User data: id(default), instagram, hash, shares
     */
    const { id: userId } = await this.collection.add({ teste: true, ...user})
    return userId
  }

}

export default new User()