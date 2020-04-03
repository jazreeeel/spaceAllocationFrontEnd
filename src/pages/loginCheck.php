<?php
if(isset($_POST['submit'])) {

    $email=$_POST['email'];
    $password=$_POST['password'];
    $query="select * from users where user='$email' and password='$password'";
    $con=mysqli_connect('localhost','root','','database');
    $run=mysqli_query($con,$query);

    if(mysqli_num_rows($run)>0) {
        echo "<script> window.open('index.php','_self')</script>";
        $_SESSION['user']=$user;
    } else {
        echo"<script>alert('incorrect user name or password')</script>";
    }

}
?>