<?php
$servidor = "localhost";
$usuario = "root";
$contrasena = "1Braycr&";
$basededatos = "proyecto";

$conexion = new mysqli($servidor, $usuario, $contrasena, $basededatos);

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

$genero = $conexion->real_escape_string($_POST['genero']);
$instrumento = $conexion->real_escape_string($_POST['instrumento']);
$comentario = $conexion->real_escape_string($_POST['comentario']);

$consulta = "INSERT INTO encuestas (genero, instrumento, comentario) VALUES ('$genero', '$instrumento', '$comentario')";

if ($conexion->query($consulta) === TRUE) {
    echo "Encuesta enviada exitosamente";
} else {
    echo "Error al enviar la encuesta: " . $conexion->error;
}

$conexion->close();
?>
