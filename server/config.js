const config = {
  environment: process.env.NODE_ENV || 'dev',
  server: {
    port: process.env.PORT || 8080
  },
  mongo: {
    url: process.env.MONGO_DB_URI || 'mongodb://localhost/game-update-database'
  },
  jwt: {
    key: 'cfgdaez4dze758a78fzae&"&épphj"é&$o$pô"$c,o$p^&$éco"$oc&oâçàqsd64"&c'
  },
  pbkdf2: {
    salt: 'LionelIsASaltyMan'
  }
};

module.exports = config;
