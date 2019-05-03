create database grading;
grant all privileges on user sandrex;

create table tbluser(id serial primary key, studid varchar unique, password varchar, name text unique, birthday varchar, peraddress varchar, contact numeric, provice text, parentname text, parentocu text, emername text, emercon numeric);
alter table tbluser owner to sandrex;
alter table tbluser add column address varchar;
alter table tbluser add column archived boolean default false;
alter table tbluser add column status text default 'pending';
alter table tbluser add column remarks text default 'pending';
alter table tbluser add column ddate timestamp default now();
alter table tbluser add column h varchar;
alter table tbluser add column w varchar;
alter table tbluser add column course varchar;
alter table tbluser add column parentcon varchar;
alter table tbluser add column gender text;
alter table tbluser add column religion varchar;

create table tblsubject(name varchar, subject varchar, section varchar, teacher varchar, subject_archived boolean default false);
alter table tblsubject owner to sandrex;
insert into tblsubject(name,subject,section,teacher)values('sandrex cabrales','NTSP 2','42A1','Eugene Abayon');
alter table tblsubject add column course varchar;
alter table tblsubject drop column course;
alter table tblsubject add column course varchar default 'none';

create table tbladmin(id serial primary key,adminid varchar, name text not null, password varchar not null);
alter table tbladmin owner to sandrex;
insert into tbladmin(adminid,name,password)values('201700108','Eugene Abayon','icanfeelit');


create table tblteacher(id serial primary key,adminid varchar, name text not null, password varchar not null);
alter table tblteacher owner to sandrex;
insert into tblteacher(adminid,name,password)values('201700108','Eugene Abayon','icanfeelit');

create table setgrade(id serial primary key, prelim numeric, midterm numeric, finals numeric, activities numeric, attendance numeric, character numeric, quiz numeric, teacher text, date timestamp default now());
alter table setgrade owner to sandrex;
alter table setgrade add constraint teacher_name unique(teacher);
alter table setgrade drop constraint teacher_name;
alter table setgrade add column department varchar;

create table section(id serial primary key, teacher text, subject varchar, section varchar, date timestamp default now());
alter table section owner to sandrex;

create table grade(id serial primary key, name varchar, pexam numeric, pactive numeric, pattend numeric, pchar numeric, mexam numeric, mactive numeric, mattend numeric, mchar numeric, fexam numeric, factive numeric, fattend numeric, fchar numeric, fquiz numeric,pquiz numeric, mquiz numeric);
alter table grade owner to sandrex;
alter table grade add column date timestamp default now();
drop table grade;
alter table grade add column course varchar default 'none';



create table grade(id serial primary key, name varchar, pexam numeric default 0, 
pactive numeric default 0, pattend numeric default 0, pchar numeric default 0, 
mexam numeric default 0, mactive numeric default 0, mattend numeric default 0, mchar numeric default 0, 
fexam numeric default 0, factive numeric default 0, fattend numeric default 0, fchar numeric default 0, 
fquiz numeric default 0,pquiz numeric default 0, mquiz numeric default 0);
alter table grade owner to sandrex;
alter table grade add column date timestamp default now();
insert into grade(name)values('sandrex cabrales');
alter table grade add column teacher varchar;
update grade set teacher = 'Eugene Abayon';
alter table grade add column subject varchar;
alter table grade add column section varchar;
update grade set subject ='NSTP 2', section = '42A1';
alter table grade add column department text;
alter table grade add column status varchar default 'pending';



create table announcement(id serial primary key, who varchar not null, what varchar not null, whiri varchar not null, whin varchar not null, date timestamp default now());
alter table announcement owner to sandrex;



