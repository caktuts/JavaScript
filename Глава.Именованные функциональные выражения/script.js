function g() { return 1; }

alert(g);//Этот код выдаст функцию


(function g() { return 1; });

alert(g);//Этот код выдаст ошибку во всех браузерах,кроме IE