const User = require("../models/User.model.model")

module.exports.usersController = {
    // реализовать получение юзера по айди
    getUser: async(req, res) => {
        try {
            const user = User.findById(req.params.id);
            res.json(user);
            
        } catch (error) {
            res.json({error: error.message});
        }
    },
    // реализовать создание юзера
    createUser: async(req, res) => {
        try {
            // В том же постмане мы отправляем req, содержащий эти значения
            // все эти значения есть в моделях, но для req надо указать те, которые поддаются правке
            const { nickname, login, password } = req.body;
            // Тут уже создается переменная, которая будет содержать данные с req
            const user = User.create({
                nickname, login, password
            });
            res.status(200).json(user);
        } catch (error) {
            res.json({error: error.message})
        }
    }
    // реализовать удаление аккаунта
}
