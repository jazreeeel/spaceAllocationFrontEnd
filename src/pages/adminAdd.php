<?php
    //Database connection
    $conn = new mysqli('localhost', 'root', 'password', 'capstone_form');

    if($conn->connect_error){
        die('Connection Failed: '.$conn->connect_error);
    }else{
        //define variables and initialise with empty values
        $email = $password = "";
        $sqlemail = "select * from user_details where email = ?";
        $sqlpassword = "select * from user_details where password = ?";
        if ($stmt = mysqli_prepare($conn, $sqlemail)){
            //bind variables to the prepared statement as parameters
            mysqli_stmt_bind_param($stmt, "s", $param_email);
            //set parameters
            $param_email = trim($_POST["email"]);
            if (mysqli_stmt_Execute($stmt)){
                //store results
                mysqli_stmt_store_result($stmt);
                if (mysqli_stmt_num_rows($stmt) == 1){
                    $email_err = "This email is already registered";
                } else {
                    $email = trim($_POST["email"]);
                }
            } else{
                echo "Something went wrong, please try again later";
            }
            mysqli_stmt_close($stmt);
        }
        if ($stmt = mysqli_prepare($conn, $sqlpassword)){
            //bind variables to the prepared statement as parameters
            mysqli_stmt_bind_param($stmt, "s", $param_password);
            //set parameters
            $param_password = trim($_POST["password"]);
            if (mysqli_stmt_Execute($stmt)){
                //store results
                mysqli_stmt_store_result($stmt);
                $password = trim($_POST["password"]);
            } else{
                echo "Something went wrong, please try again later";
            }
            mysqli_stmt_close($stmt);
        }
            
        if (empty($email_err)){
            $sql = "insert into user_details(email, password) values(?, ?)";
            if ($stmt = mysqli_prepare($conn, $sql)){
                //bind var to prepared statement as paras
                mysqli_stmt_bind_param($stmt, "ss", $param_email, $param_password);
                //set para
                $param_email = $email;
                $param_password = $password;
                mysqli_stmt_Execute($stmt);
                echo "registration successful...";
                mysqli_stmt_close($stmt);
            }
            mysqli_close($conn);
        }
    }
?>