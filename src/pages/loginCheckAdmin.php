<?php
    session_start();
    //check if user is logged in
    if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true){
        header("location:welcome.php");
        exit;
    }
    $conn = new mysqli('localhost', 'root', 'password', 'capstone_form');
    $email = $password = "";
    $email_err = $password_err = "";
    $bool = false;

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $email = trim($_POST["email"]);
        $password = trim($_POST["password"]);
        $sql = "SELECT id, email, password FROM emails WHERE email = ?";
        if($stmt = mysqli_prepare($link, $sql)){
            // Bind variables to the prepared statement as parameters
            mysqli_stmt_bind_param($stmt, "s", $param_email);
            // Set parameters
            $param_email = $email;
            // Attempt to execute the prepared statement
            if(mysqli_stmt_execute($stmt)){
                // Store result
                mysqli_stmt_store_result($stmt);
                // Check if username exists, if yes then verify password
                if(mysqli_stmt_num_rows($stmt) == 1){                    
                    // Bind result variables
                    mysqli_stmt_bind_result($stmt, $id, $username, $password);
                    if(mysqli_stmt_fetch($stmt)){
                        if(password_verify($password, $password)){
                            // Password is correct, so start a new session
                            session_start();
                            // Store data in session variables
                            $_SESSION["loggedin"] = true;
                            $_SESSION["id"] = $id;
                            $_SESSION["email"] = $email;
                            $bool = true;
                            header("location: welcome.php");
                        } else{
                            // Display an error message if password is not valid
                            $password_err = "The password you entered was not valid.";
                        }
                    }
                } else{
                    // Display an error message if username doesn't exist
                    $email_err = "No account found with that email.";
                }
            } else{
                echo "Oops! Something went wrong. Please try again later.";
            }
            // Close statement
            mysqli_stmt_close($stmt);
    }
    // Close connection
    mysqli_close($link);
}
?>