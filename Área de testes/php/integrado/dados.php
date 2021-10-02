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
    // $v = $_GET["valor"];
    // $rq = sqrt($v);
    // echo "A raiz quadrada de $v é: ". number_format($rq, 2);

    $nome = isset($_GET["nome"])?$_GET["nome"]:"[Não informado]";
    $sexo = isset($_GET["sexo"]) ? $_GET["sexo"] : "[Não informado]";
    $idade = isset($_GET["data"]) ? $_GET["data"] : 0;

    echo "O seu nome é $nome ". "<br>";
    echo "Seu sexo é $sexo ". "<br>";
    echo "Sua idade é ". (date("Y") - $idade);
    ?>
    <br> <br>
    <a href="index.html">Voltar</a>
</body>
</html>