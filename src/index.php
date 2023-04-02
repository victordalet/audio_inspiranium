<?php


echo <<<EOF
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <meta name='Author' CONTENT='Victor Dalet'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=no'>
    <meta name='description' content='Welcome to the audio Player of Inspiranium.'>
    <meta name='google-site-verification' content='QRc7Dtghh-B07dwg4xAfRtLj1kgrA3yZc-49biFp6FM' />
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel='icon' href='https://inspiranium.fr/assets/logo.png'>
	<title>AUDIO - INSPIRANIUM</title>
</head>
<body>
<button class="button_play_song" onclick="new Player_audio(2,nb);">PLAY</button>
    <div class="container">
        <canvas id='canvas'></canvas>
    </div>
    <div id="player"></div>

</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.151.2/three.min.js"></script>
<script src="form.js"></script>
<script src="player.js"></script>
<script>
let nb;
fetch("../module/get_nb_picture.php")
    .then(response => response.text())
    .then(r => {
        nb = r;
    })

</script>
</html>

EOF;
