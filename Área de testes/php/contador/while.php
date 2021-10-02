<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>teste</title>
    <style>
        
    </style>
</head>
<body>
    <h1>Os valores são:</h1>
    <?php    
        $inicio = isset($_GET["inicial"]) ? $_GET["inicial"] : "[Valor não informado]";
        $fim = isset($_GET["final"]) ? $_GET["final"] : "[Valor não informado]";
        $espaco = isset($_GET["espaco"]) ? $_GET["espaco"] : "[Valor não informado]";

        // while ($inicio <= $fim) {
        //     echo ($inicio). " ";
        //     $inicio += $espaco;
        // }
        $r = 1;
        while ($inicio >= 1) {
            $r *= $inicio;
            $inicio--;
        }
        echo $r;
    ?>
    <a href="javascript:history.go(-1)">Voltar</a>
    
</body>
</html>