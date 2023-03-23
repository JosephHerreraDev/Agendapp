create database Agendapp;
use Agendapp;

create table Usuario(
idUsuario int primary key unique auto_increment not null,
nombre varchar(50) not null,
correo varchar(100) not null,
constra varchar(50) not null);

create table Recordatorios(
idRecordatorio int primary key unique auto_increment not null,
idUsuario int not null,
titulo varchar(50) not null,
contenido varchar(200) not null,
foreign key (idUsuario) references Usuario(idUsuario) on delete cascade);

create table Eventos(
idEvento int primary key unique auto_increment not null,
idUsuario int not null,
titulo varchar(50) not null,
contenido varchar(200) not null,
fecha date not null,
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
fecha date not null,
foreign key (idUsuario) references Usuario(idUsuario) on delete cascade);