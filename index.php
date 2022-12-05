<?php
echo '<!DOCTYPE html>';
header('Content-type: text/html; charset=utf-8');
echo '<!-- Social Media Wall HTML -->';
echo '<html>';
echo '<head>';
echo '<link rel="stylesheet" href="stylesheet.css"/>';
echo '<link href="https://fonts.googleapis.com/css2?family=Kanit&display=swap" rel="stylesheet">';
echo '<script src="script.js"></script>';
echo '</head>';
echo '<body>';
echo '<div>';
echo '';
echo '<h2> <bold>Your Social Media Wall </bold> </h2>';
echo '';
echo '<div id="Square_SM1">';
echo '';
echo 'First Name:<input type="text" name="fname" id="fname"/>';
echo '<button onclick="addRow();">Add Row </button>';
echo '';
echo '<table border="1">';
echo '';
echo '<tr id="tweets_row">';
echo '';
echo '</tr>';
echo '';
echo '</table>';
echo '';
echo '<h3 id="text_1"> #YOURHASHTAGHERE </h3>';
echo '';
echo '</div>';
echo '';
echo '';
echo '';
echo '</body>';
echo '';
echo '</html>';

$response = file_get_contents('https://onstipe.com/web/api/json/6807?key=05c897a699e307e8062db524932e687d');

$response = json_decode($response);

?>