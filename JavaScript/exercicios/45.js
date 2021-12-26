const maiorOuIgual = (n1, n2) => console.log(n1 <= n2 ? Number.isInteger(n1) && Number.isInteger(n2) : false);

maiorOuIgual(0 ,0);
maiorOuIgual(0, "0");
maiorOuIgual(5, 1);