<?php
    header('Content-Type: text/javascript');

    $string = file_get_contents("https://cdn.splitbee.io/sb.js");

    if($string === FALSE) {
         echo "Could not read the file.";
    } else {
         echo $string;
    }

?>