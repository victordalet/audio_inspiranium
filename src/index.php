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
<button class="button_play_song" onclick="new Player_audio(1);">PLAY</button>
    <div class="container">
        <canvas id='canvas'></canvas>
    </div>
    <div id="player"></div>

</body>
<script src="https://www.youtube.com/iframe_api"></script>
<script src="script.js"></script>
</html>

EOF;
