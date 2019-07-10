alert('Js');
/*В примере ниже подключены два скрипта small.js и big.js.
Если предположить, что small.js загружается гораздо быстрее, чем big.js – какой выполнится первым?*/
<script src="big.js"></script>
<script src="small.js"></script>/*Выполниться первым*/


<script async src="big.js"></script>
<script async src="small.js"></script>/*Выполниться первым*/


<script defer src="big.js"></script>/*Выполниться первым*/
<script defer src="small.js"></script>