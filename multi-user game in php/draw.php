<?php
print <<<EDF
<!doctype html>
<html>

<body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/themes/classic.min.css"/> <!-- 'classic' theme -->
<script src="pickr/src/js/pickr.js">
<script src="draw.js?version=$time"></script>
<div id=picker></div>
<canvas id=mycanvas height=500 style='margin:8px;border:1px #000 solid'></canvas>

Hello There
</body>
</html>

EDF;