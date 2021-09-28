<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>

    </style>
</head>
<body>
    <?php
    $n1 = $_GET["a"];
    $n2 = $_GET["b"];
    echo "Os valores recebidos são: $n1 e $n2". "<br>";
    // echo "a soma de $n1 com $n2 é: ". ($n1 + $n2). "<br>";
    // echo "a subtração de $n1 por $n2 é: ". ($n1 - $n2). "<br>";
    // echo "a multiplicação de $n1 por $n2 é: ". ($n1 * $n2). "<br>";
    // echo "a divisão de $n1 por $n2 é: ". ($n1/$n2). "<br>";
    // echo "o resto da divisão de $n1 por $n2 é: ". ($n1 % $n2). "<br>";
    // echo "a média da divisão de $n1 e $n2 é: ". ($n1 + $n2)/2;

    // FUNÇÕES MATEMÁTICAS

    echo "o valor absoluto de $n2 é: ". abs($n2). "<br>";
    echo "o valor de $n1<sup>$n2</sup>  é: ". pow($n1, $n2). "<br>";
    echo "a raiz quadrada de $n1 é: ". sqrt($n1). "<br>";
    echo "o valor arredondado de $n2 é: ". round($n2). "<br>"; 
    //ceil e floor fazem o arredondamento para cima e para baixo
    echo "a parte inteira de $n2 é: ". intval($n2). "<br>"; 
    echo "o valor de $n2 em moeda é: R$". number_format($n2, 2, ",", "."). "<br>"; 






    

    ?>
</body>
</html>