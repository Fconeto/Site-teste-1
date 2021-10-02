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
        $nome = isset($_GET["nome"]) ? $_GET["nome"]: "[Nome não informado]";
        $idade = isset($_GET["idade"]) ? $_GET["idade"] : "[Idade não informada]";
        

        if ($nome == "" || $idade == "") {
            echo "Preencha todos os campos";
        }
        else {
            echo "Seu nome é $nome e sua idade é $idade anos". "<br>";
            if ($idade >= 18 && $idade <=64) {
                echo "Voto obrigatório";
            }
            else if ($idade >= 16) {
                echo "Voto opcional";
            }
            else {
                echo "Não vota";
            }
                
        }
        
    ?>
    
</body>
</html>