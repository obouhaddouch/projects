
<?php

    include_once('db.php');

    $Errors = [
        'fnError' => '',
        'lnError' => '',
        'adError' => '',
        'zcError' => '',
        'ciError' => '',
    ];
    if(isset($_POST['submit'])){
        $fname = ($_POST['fName']);
        if(empty($fname)){
            $Errors['fnError'] = "vul je voornaam in <br/>";
            echo $Errors['fnError'];
        }
        $lname = ($_POST['lName']);
        if(empty($lname)){
            $Errors['lnError'] = "vul je Achternaam in <br/>";
            echo $Errors['lnError'];
        }
        $address = ($_POST['address']);
        if(empty($address)){
            $Errors['adError'] = "vul je Adres in <br/>";
            echo $Errors['adError'];
        }
        $zipcode = ($_POST['zipcode']);
        if(empty($zipcode)){
            $Errors['zcError'] = "vul je Postcode in <br/>";
            echo $Errors['zcError'];
        }
        $city = ($_POST['city']);
        if(empty($city)){
            $Errors['ciError'] = "vul je Woonplaats in <br/>";
            echo $Errors['ciError'];
        }

        if(!array_filter($Errors)){
          
            
            
            $q = "INSERT INTO customer (`fname`, `lname`, `address`, `zipcode`, `city`) VALUES (:fname, :lname, :address, :zipcode, :city)";
            $stmt = $pdo->prepare($q);
            $stmt->bindParam(':fname', $fname);
            $stmt->bindParam(':lname', $lname);
            $stmt->bindParam(':address', $address);
            $stmt->bindParam(':zipcode', $zipcode);
            $stmt->bindParam(':city', $city);

            $stmt->execute();
           
            header("location:products.php");

            
        }
        
    }

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">
    <title>Document</title>
    
</head>
<body>
    <div class="app">
        <h3 class="tit"> ZUZU </h3>

        <form action="" method="POST">
            <label class="lbl" for="">Voornaam: </label>
            <input class="form-control" type="text" name="fName"> 

            <label class="lbl" for="">Achternaam: </label>
            <input class="form-control" type="text" name="lName"> 

            <label class="lbl" for="">Adres: </label>
            <input class="form-control" type="text" name="address"> 

            <label class="lbl" for="">Postcode: </label>
            <input class="form-control" type="text" name="zipcode"> 

            <label class="lbl" for="">Woonplaats: </label>
            <input class="form-control" type="text" name="city"> <br>

           
            <button class="btn btn-secondary submit-btn" type="submit" name="submit">Volgende</button>

        </form>


    </div>



    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>