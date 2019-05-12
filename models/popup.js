module.exports = (sequelize, DataTypes) => {
    return sequelize.define('popup', {
        tp: {
            type: DataTypes.STRING(10)
        },
        subj: {
            type: DataTypes.STRING(100)
        },
        conts: {
            type: DataTypes.STRING(500)
        },
        cnnt_url_yn: {
            type: DataTypes.STRING(2)
        },
        cnnt_url: {
            type: DataTypes.STRING(50)
        },
        filename: {
            type: DataTypes.STRING(100)
        },
        originalname: {
            type: DataTypes.STRING(100)
        }
    },
    {
        timestamps: true,
        paranoid: true
    })
}