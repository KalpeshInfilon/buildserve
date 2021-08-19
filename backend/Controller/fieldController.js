const field_Schema = require('../Models/fieldModel')
module.exports.listField = async (req, res) => {
    console.log("callll list controller", Date.now())
    const dataJson = [
        { id: "1", name: "Kalpesh", email: "kalpesh@gmail.com", mobile: "800808080" },
        { id: "2", name: "Neel", email: "neel@gmail.com", mobile: "8787878777" },
        { id: "3", name: "Jasmin", email: "jasmin@gmail.com", mobile: "656565656" },
        { id: "4", name: "Vishal", email: "vishal@gmail.com", mobile: "656565656" },
        { id: "5", name: "Janak", email: "janak@gmail.com", mobile: "6767676767" }
    ]

    const data = await field_Schema.find()
    res.send(data)
}



module.exports.AddField = async (req, res) => {
    console.log("add call", req.body);
    const data = await field_Schema.create(req.body);
    console.log("datatat", data)
    res.send(data)
}