module.exports = (sequelize, DataTypes) => {
    return sequelize.define('login', {
        email: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(20)
        },
        salt: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
    },
    {
        timestamps: true, //등록날짜 
        paranoid: true //삭제날짜
    })
}