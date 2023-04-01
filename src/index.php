<?php


echo <<<EOF
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="style.css">
	<title>AUDIO - INSPIRANIUM</title>
</head>
<body>
<button onclick="new Player_audio();">PLAY</button>
    <div class="container">
        <canvas id='canvas'></canvas>
    </div>

</body>
<script src="script.js"></script>
</html>

EOF;
