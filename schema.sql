CREATE SCHEMA plants;
USE plants;

CREATE TABLE users (
   id int not null auto_increment primary key,
   username varchar(100) not null,
   email varchar(100) not null,
   password varchar(100) not null,
   role VARCHAR(25) NOT NULL DEFAULT "guest",
   _created TIMESTAMP DEFAULT NOW()
);

create table plants (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   name TEXT NOT NULL,
   water INT,
   sunlight VARCHAR(25) NOT NULL,
   _created TIMESTAMP DEFAULT NOW()
);

create table userplants (
   userid INT NOT NULL,
   plantid INT NOT NULL,
   plant_name TEXT,
   _created TIMESTAMP DEFAULT NOW(),
   primary key (userid, plantid),
   foreign key (userid) references users(id),
	foreign key (plantid) REFERENCES plants(id)
);

create table tokens (
  id int not null auto_increment primary key,
  userid int not null,
  token text,
  expires TIMESTAMP,
  _created datetime default current_timestamp,
   FOREIGN KEY (userid) REFERENCES users(id)
);

CREATE TABLE posts (
id INT NOT NULL AUTO_INCREMENT,
userid INT NOT NULL,
plantid INT,
title TEXT NOT NULL, 
content TEXT,
_created TIMESTAMP DEFAULT NOW(),
PRIMARY KEY (id),
FOREIGN KEY (userid) REFERENCES users(id),
FOREIGN KEY (plantid) REFERENCES plants(id)
);

CREATE TABLE replies (
id INT NOT NULL AUTO_INCREMENT,
userid INT NOT NULL, 
content TEXT NOT NULL, 
_created TIMESTAMP DEFAULT NOW(),
PRIMARY KEY (id),
FOREIGN KEY (userid) REFERENCES users(id)
);

CREATE TABLE postreplies (
postid INT NOT NULL,
replyid INT NOT NULL,
PRIMARY KEY (postid, replyid),
FOREIGN KEY (postid) REFERENCES posts(id),
FOREIGN KEY (replyid) REFERENCES replies(id)
);


ALTER TABLE users
MODIFY username TEXT NOT NULL;

DROP USER 'plants'@'localhost';
FLUSH PRIVILEGES;

CREATE USER 'plants'@'localhost' IDENTIFIED BY 'plants123';
GRANT ALL PRIVILEGES ON plants.* TO 'plants'@'localhost';
ALTER TABLE users ADD UNIQUE(email);