create database plants;
use plants;



create table User (
   id int not null auto_increment primary key,
   username varchar(100) not null,
   email varchar(100) not null,
   password varchar (100) not null,
   _created datetime default current_timestamp
);


create table userplants (
   userid int not null,
   userplant int not null,
   _created datetime default current_timestamp,
   primary key (userid, userplant),
   foreign key (userid) references user(id)
);
ALTER TABLE userplants
  ADD FOREIGN KEY (userplant) REFERENCES plantsInformation(plantsid);

create table plantsInformation (
   plantsid int not null,
   waterPlants varchar (100) not null,
   sunlight varchar (100) not null,
   turningPlants varchar (100) not null,
   _created datetime default current_timestamp,
    foreign key (plantsid) references userplants(userid)
);



CREATE USER 'plants'@'localhost' IDENTIFIED BY 'plants123';
GRANT ALL PRIVILEGES ON plants.* TO 'plants'@'localhost';

create table tokens (
  id int not null auto_increment primary key,
  User int not null,
  token text,
  userid int,
  expires datetime,
  _created datetime default current_timestamp,
   constraint fk_tokens_user foreign key (userid) references User(id)
);
