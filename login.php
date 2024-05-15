<?php
$conn = mysqli_connect("localhost", "root", "", "minor_project");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// Step 2: Construct SQL Query
    $username = $_REQUEST['b'];
    $passcode = $_REQUEST['d'];
    // Step 3: Execute the Query
    $sql = "SELECT * FROM language_dekho WHERE username='$username' AND passcode='$passcode'";
    $result = $conn->query($sql);   
    if ($result->num_rows > 0) {
            session_start();
            $_SESSION['username'] = $username;
            $_SESSION['passcode'] = $passcode;
            header("Location:index.php");
            exit;
    }else {
        echo "<script>alert('You are Not Registered Kindly Register then login')</script>";
    }
$conn->close();
?>