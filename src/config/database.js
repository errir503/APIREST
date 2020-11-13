

module.exports={
  dialect: "postgres",
  port: 5432,
  host: process.env.HOST ,
  schema: "public",
  database: process.env.DATABASE ,
  username:process.env.USER ,
  password: process.env.PASSWORD ,
  define: {
    timestamps: true,
    underscored: true,
  },
}
/*
module.exports={
  dialect: "postgres",
  port: 5432,
  host: "localhost",
  schema: "public",
  database: "smart",
  username: "postgres",
  password: "1234",
  define: {
    timestamps: true,
    underscored: true,
  },
}

*/