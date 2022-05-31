




<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="./css/style.css">

<div class="app">

<h3 class='tit'> ZUZU </h3>    


 <?php

    include_once('db.php');

    $query = $pdo->prepare("SELECT * FROM customer ORDER by id DESC LIMIT 1");
   
    $query->execute();
    $request = $query->fetch(PDO::FETCH_ASSOC);

   // var_dump($request);

    echo $request['fname'] . " " . $request['lname'] . "<br/>";
    echo $request['address'] . "<br/>";
    echo $request['zipcode'] . " " . $request['city'];


    session_start();
 
 ?>

<div class="">
    Sushi: <?= $_SESSION["sushi"] ?> <br>
    Aantaal: <?= $_SESSION["amount"] ?>
    </p>
    <form action="order.php" method="post">
        <!-- <button type="submit">OK</button> -->
    </form>
</div>


</div>





<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>