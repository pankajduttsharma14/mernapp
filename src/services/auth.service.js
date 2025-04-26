const User = require("../models/user-model");
const bcrypt = require("bcrypt");

class AuthService {
  static async login(email, password) {
    let user = await User.findOne({ email });
    if (!user) throw Error("User not found");
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) throw Error("Invalid password");
    const token = user.generateToken();

    const flattedUserObj = user.toObject();
    Reflect.deleteProperty(flattedUserObj, "password");
    return { user: flattedUserObj, token };
  }

  static async signup(data) {
    let user = await User.findOne({ email: data?.email });
    if (user) throw Error("User already exists");
    user = await User.create(data);
    const token = user.generateToken();

    const flattedUserObj = user.toObject();
    Reflect.deleteProperty(flattedUserObj, "password");
    return { user: flattedUserObj, token };
  }

  static async update(id, data) {
    let user = await User.findByIdAndUpdate(id, { ...data }, { new: true });
    console.log(user);
    return { user };
  }
}

module.exports = AuthService;
