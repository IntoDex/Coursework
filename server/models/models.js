const sequelize = require('../db')
const {DataTypes} = require('sequelize')

// Модели данных, их состовляющие.

const User = sequelize.define('user', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Favorite = sequelize.define('favorite', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const FavoriteRec = sequelize.define('favorite_rec', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Recepte = sequelize.define('recepte', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Type = sequelize.define('type', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Category = sequelize.define('category', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Rating = sequelize.define('rating', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
})

const Ingredients = sequelize.define('ingredients', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

// Связующие модели таблиц

const TypeRec = sequelize.define('type_rec', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const CateRec = sequelize.define('cate_rec', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const IngRec = sequelize.define('ing_rec', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

// Связи таблиц друг с другом

User.hasOne(Favorite)
Favorite.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Favorite.hasMany(FavoriteRec)
FavoriteRec.belongsTo(Favorite)

//Type.hasMany(Recepte)
//Recepte.belongsTo(Type)

//Category.hasMany(Recepte)
//Recepte.belongsTo(Category)

//Ingredients.hasMany(Recepte)
//Recepte.belongsTo(Ingredients)

Recepte.hasMany(Rating)
Rating.belongsTo(Recepte)

Recepte.hasMany(FavoriteRec)
FavoriteRec.belongsTo(Recepte)

// Связующие
Type.belongsToMany(Recepte, {through: TypeRec })
Recepte.belongsToMany(Type, {through: TypeRec })

Category.belongsToMany(Recepte, {through: CateRec })
Recepte.belongsToMany(Category, {through: CateRec })

Ingredients.belongsToMany(Recepte, {through: IngRec })
Recepte.belongsToMany(Ingredients, {through: IngRec })

module.exports = {
    User,
    Favorite,
    FavoriteRec,
    Recepte,
    Type,
    Category,
    Rating,
    Ingredients,
    TypeRec,
    CateRec,
    IngRec
}
