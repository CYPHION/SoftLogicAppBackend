const { DataTypes } = require("sequelize");
const db = require("../config/db");

const BriefForm = db.define("BriefForm", {
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    formData: {
        type: DataTypes.TEXT,
        get: function () {
            return JSON.parse(this.getDataValue('value'));
        },
        set: function (value) {
            this.setDataValue('value', JSON.stringify(value));
        },
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING
    }
});

module.exports = BriefForm;
