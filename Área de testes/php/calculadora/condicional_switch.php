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
    <h1>PHP relações</h1>
    <?php    
        $valor = isset($_GET["valor"]) ? $_GET["valor"] : 0;
        $tipo = isset($_GET["operador"]) ? $_GET["operador"] : 1;

        switch ($tipo) {
            case 1: 
                $r = $valor * 2;
                break;
            case 2:
                $r = $valor*$valor*$valor;
                break;
            case 3:
                $r = sqrt($valor);
                break;
        }
        echo "O resultado é: $r";
    ?>
    <a href="javascript:history.go(-1)">Voltar</a>
    
</body>
</html>