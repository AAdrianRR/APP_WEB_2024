CREATE VIEW conculta  AS 
SELECT auotres.id_autor, articulos, prestamo.fehca
FROM prestamo
JOIN libros on prestamo.id_libro= libros.id_libro
JOIN categoria on libros.id_categoria = categoria.id_categoria; 

SELECT * FROM RENTAS
