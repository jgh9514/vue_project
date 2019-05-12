module.exports = (sequelize, DataTypes) => {
    return sequelize.define('notice', {
        tp: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        subj: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        conts: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        init: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
    },
    {
        timestamps: true, //등록날짜 
        paranoid: true //삭제날짜
    })
}