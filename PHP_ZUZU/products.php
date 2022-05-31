

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="./css/style.css">

<?php

    include_once('db.php');
    session_start();

    $query = $pdo->prepare("SELECT * FROM sushi");
    $query->execute();
    $request = $query->fetchAll(PDO::FETCH_ASSOC);

    //var_dump($request)


    
    $productER = '';
    
    if(isset($_POST['ok'])){
       
        if (isset($_POST['sushi'])) {
            $sushi = $_POST['sushi'];
           
        } else {
            $productER = 'Kies een sushi ! <br/>';
            
        }
        if (isset($_POST['amount'])) {

            $amount = $_POST['amount'];
            //echo $amount;

        
        } else {
            $productER .= ' Kies een hoeveelheid  !';
           
        }

        echo $productER;
        if ($productER === '') {

            $_SESSION["sushi"] = $_POST['sushi'];
            $_SESSION["amount"] = $_POST['amount'];

            

            header("location:order.php");
        }

        //header("location:order.php");
    }


?>



<div class="app">
<h3 class='tit'> ZUZU </h3>    

</div>

    <form action="" method="POST">
    
<?php

    echo "<ul class='list-group list-group-flush '>";

    foreach($request as $data){
        echo "<li class='list-group-item'> 
        <input class='form-check-input' 
        type='radio' name='sushi' 
        id='flexRadioDefault1' value='" . $data['name'] . "'> <span>" . $data['name']  
        ."</span><span> €". $data['price'] ."</span><span>"
        ?>

        <select name='amount' id="amount">   
            <?php
            for($i = 1; $i <= $data['amount']; $i++ ){
                echo "<option  value='".$i."'>" . $i . "</option>";
            }
            
            ?>
        </select>
 
        <?php
        
        "</li>";
    }

    echo "</ul>";
    echo "<div class='btn-con'> <button class='btn btn-secondary' type='submit' name='ok'> Volgende  </button> </div>"; 

?>
    </form>





<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>