/*
gestion de tablas
Create - insert -> ok
Read - select -> ok
Update - update -> OK
Delete - delete
*/

INSERT INTO CURSO (NOMBRE, DESCRIPCION) VALUES 
('Introducción a la Programación', 'Curso básico para aprender lógica y algoritmos'),
('Desarrollo Web Frontend', 'HTML, CSS y JavaScript desde cero'),
('Bases de Datos con PostgreSQL', 'Creación y gestión de bases de datos relacionales'),
('Programación en Python', 'Curso intensivo de Python para análisis y desarrollo'),
('Gestión de Proyectos', 'Enfoque en metodologías como PMI y Scrum'),
('Inteligencia Artificial Básica', 'Fundamentos de IA y Machine Learning'),
('Seguridad Informática', 'Protección de datos, hacking ético y criptografía'),
('DevOps y Automatización', 'CI/CD, Docker, Jenkins y control de versiones'),
('Diseño de Interfaces UX/UI', 'Diseño centrado en el usuario para apps y sitios web'),
('Arquitectura de Software', 'Patrones de diseño y estructuras escalables');

SELECT *
FROM CURSO;

SELECT *
FROM curso
WHERE ID = 3;

UPDATE CURSO
SET NOMBRE = 'Desarrollo web fullstack'
WHERE ID = 3;

DELETE
FROM CURSO
WHERE ID = 3;

/**/
INSERT INTO CURSO (ID,NOMBRE, DESCRIPCION) VALUES (1, 'Introducción a la Programación', 'Curso básico para aprender lógica y algoritmos')

INSERT INTO ESTUDIANTE(
    NOMBRE, APELLIDO, CORREO, EDAD, FECHA_NACIMIENTO, ID_CURSO) VALUES ('Laura', 'santamaria', 'Laurasantamaria@GMAIL.COM', 20, '2000-01-01', 1),
    ('Maria', 'Gomez', 'Mariagomez@gmail.com', 21, '1999-02-02', 1),
    ('Pedro', 'Garcia', 'pedrogarciaz@gmail.com', 22, '1998-03-03', 1),
    ('Ana', 'Lopez', 'Analopez@gmail.com', 23, '1997-04-04', 1),
    ('Luis', 'Martinez', 'luismartinez@gmail.com', 24, '1996-05-05', 1),
    ('Sofia', 'Sanchez', 'sofiasanchez@gmail.com', 25, '1995-06-06', 2);
    
  SELECT * FROM ESTUDIANTE;

  /* TABLA MATRICULA */

  INSERT INTO MATRICULA(FECHA_MATRICULA,ID_ESTUDIANTE) VALUES
  ('2023-01-06', 3);

  SELECT * FROM MATRICULA;

  /* PROFESORES*/

  INSERT INTO PROFESOR(NOMBRE, APELLIDO, CORREO, EDAD) VALUES
  ('Maria', 'Gomez', 'MARIAGOMEZ@GMAIL.COM', 31),
  ('Pedro', 'Garcia', 'PEDROGARCIA@GMAIL.COM', 32),
  ('jUAN', 'SILVA', 'JUANSILVA@GMAIL.COM', 32),
  ('LILIANA', 'FONSECA', 'LILIANANFONSECA@GMAIL.COM', 32);
  
  SELECT * FROM PROFESOR;
 
  /* TABLA PROFESOR_CURSO */

  INSERT INTO PROFESOR_CURSO(ID_PROFESOR, ID_CURSO) VALUES
  (1, 1),
  (2, 2),
  (3, 7),
  (4, 4),
  (5, 5);