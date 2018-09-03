DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users;

CREATE TABLE posts (
  id bigserial PRIMARY KEY,
  content varchar(250) NOT NULL,
  created_at timestamp NOT NULL
);

CREATE TABLE users (
  id bigserial PRIMARY KEY,
  username varchar(30) NOT NULL,
  CONSTRAINT AK_username UNIQUE(username),
  password varchar(30) NOT NULL,
  email varchar NOT NULL,
  CONSTRAINT AK_password UNIQUE(password),
  created_at timestamp NOT NULL,
  user_bio varchar,
  user_image varchar
);
