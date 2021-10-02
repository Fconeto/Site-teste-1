<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        a {
            text-decoration: none;
            color: white;
            background: blue;
            padding: 5px;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <?php 
    $valor = isset($_GET["tab"]) ? $_GET["tab"] : "[Valor não informado]";

    for ($i = 1; $i <= 10; $i++) {
        $r = $valor * $i;
        echo ($r). " ";
    }
    ?>
    <br> <br>
    <a href="index.html">Voltar</a>
</body>
</html>