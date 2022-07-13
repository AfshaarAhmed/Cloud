module.exports = {

    development: {
        client: "postgresql",
        connection: "postgres://" + process.env.POSTGRES_USERNAME + ":" + process.env.POSTGRES_PASSWORD + "@" + process.env.POSTGRES_HOST + "/" + process.env.POSTGRES_DATABASE,
        migrations: {
            directory: __dirname + "/db/migrations",
        },
        seeds: {
            directory: __dirname + "/db/seeds"
        }

    },

    production: {
        client: "postgresql",
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + "/db/migrations",
        },
        seeds: {
            directory: __dirname + "/db/seeds"
        }
    }

}