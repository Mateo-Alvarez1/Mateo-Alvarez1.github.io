<?php

$nombre = isset($_POST['nombre']) ? $_POST['nombre'] : '';
$apellido = isset($_POST['apellido']) ? $_POST['apellido'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$contrasenia= isset($_POST['contrasenia']) ? $_POST['contrasenia'] : '';

try {

    $conexion = new PDO("mysql:host=localhost;port=3308;dbname=prueba_db", "root", "");
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    $pdo = $conexion->prepare('INSERT INTO usuarios(nombre, apellido, email,contrasenia) VALUES(?, ?, ?,?)');
     $pdo->bindParam(1, $nombre);
     $pdo->bindParam(2, $apellido);
     $pdo->bindParam(3, $email);
    $pdo->bindParam(4, $contrasenia);
    $pdo->execute() or die(print($pdo->errorInfo()));

    echo json_encode('true');

} catch(PDOException $error) {
    echo $error->getMessage();
    die();
}