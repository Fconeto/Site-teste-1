<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>teste</title>
    <style>
        h2 {
            color: red;
        }
    </style>
</head>
<body>
    <h1>PHP atribuições</h1>
    <?php
    $n1 = $_GET["a"];
    $n2 = $_GET["b"];

    echo "o valor de n1 é $n1 e n2 é $n2". "<br>";
    // echo "o valor de n1 agora é: ". ($n1 += $n2). "<br>";
    // echo "o valor de n1 agora é: ". ($n1 -= $n2). "<br>";
    // echo "o valor de n1 agora é: ". ($n1 *= $n2). "<br>";
    // echo "o valor de n1 agora é: ". ($n1 /= $n2). "<br>";

    // echo "o valor do produto com $n2% de desconto é: R$". number_format($n1 -= $n1 * $n2/100, 2, ",", "."). "<br>";
    // echo "o ano anterior ao ano de $n1 é: ". (--$n1). "<br>";
    
    // $n1 = $n2;
    // echo "n1 agora vale: ". ($n1 += 100). "<br>";
    // echo "n2 vale: ". ($n2). "<br>";

    // $n1 = &$n2;
    // echo "n1 agora vale: ". ($n1 += 100). "<br>";
    // echo "n2 vale: ". ($n2). "<br>";

    $site = "google";
    $$site = "youtube";

    echo $site. "<br>";
    echo $google;
    
    ?>
    
</body>
</html>