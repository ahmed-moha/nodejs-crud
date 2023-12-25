const User = require("../models/user");




module.exports = {
    createUser: async (req, res) => {
        const { name, phone } = req.body;
        try {
            const user = User({
                name: name,
                phone: phone,
            });

            const data = await user.save();
            res.status(200).json({ status: true, data: data },);
        } catch (e) {
            res.status(400).json({
                status: false,
                message: e.toString()
            })
        }
    },
    getUsers: async (req, res) => {

        try {
            const users =await User.find();
            res.status(200).json({ status: true, data: users });
        } catch (e) {
            res.status(400).json({
                status: false,
                message: e.toString()
            })
        }
    },
    getUser: async (req, res) => {

        try {
            const user = await User.findById({ _id: req.params.id });
            res.status(200).json({ status: true, data: user });
        } catch (e) {
            res.status(400).json({
                status: false,
                message: e.toString()
            })
        }
    },
    deleteUser: async (req, res) => {

        try {
            const user = await User.findByIdAndDelete({ _id: req.params.id });
            res.status(200).json({ status: true, data: "USER DELETED SUCCESSFULLY ✅" });
        } catch (e) {
            res.status(400).json({
                status: false,
                message: e.toString()
            })
        }
    },
    updateUser: async (req, res) => {

        try {
            const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
            res.status(200).json({ status: true, message: "USER UPDATED SUCCESSFULLY ✅", data: user },);
        } catch (e) {
            res.status(400).json({
                status: false,
                message: e.toString()
            })
        }
    }
};