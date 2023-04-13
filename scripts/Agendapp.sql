create database Agendapp;
use Agendapp;

create table Usuario(
idUsuario int primary key unique auto_increment not null,
nombre varchar(50) not null,
correo varchar(100) not null,
contra varchar(50) not null);

create table Recordatorios(
idRecordatorio int primary key unique auto_increment not null,
idUsuario int not null,
titulo varchar(50) not null,
horafecha datetime not null,
contenido varchar(200) not null,
foreign key (idUsuario) references Usuario(idUsuario) on delete cascade);

create table Eventos(
idEvento int primary key unique auto_increment not null,
idUsuario int not null,
titulo varchar(50) not null,
contenido varchar(200) not null,
horafecha date not null,
asistentes varchar(500),
lugar varchar(100),
foreign key (idUsuario) references Usuario(idUsuario) on delete cascade);

create table Notas(
idNota int primary key unique auto_increment not null,
idUsuario int not null,
titulo varchar(50) not null,
contenido varchar(200) not null,
foreign key (idUsuario) references Usuario(idUsuario) on delete cascade);

create table Tarea(
idTarea int primary key unique auto_increment not null,
idUsuario int not null,
titulo varchar(50) not null,
horafecha datetime not null,
foreign key (idUsuario) references Usuario(idUsuario) on delete cascade);

INSERT INTO Usuario (nombre, correo, contra)
VALUES ("Joseph", "joe@gmail.com", "123");

INSERT INTO Eventos (idusuario, titulo, contenido, horafecha, asistentes, lugar)
VALUES (1, 'Concierto de Rock', 'Un concierto de rock con bandas locales', '2023-05-15 19:00:00', 200, 'Estadio Municipal');




