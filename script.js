var primeiraFoto = 1;

showImgs(primeiraFoto);

function mudarFoto(numeroFoto)
{
    showImgs(primeiraFoto += numeroFoto);
}

function showImgs(numero)
{
    var qtdeDeFotos = document.getElementsByClassName("slider1");

    if (numero > qtdeDeFotos.length)
    {
        primeiraFoto = 1;
    }

    if (numero < 1)
    {
        primeiraFoto = qtdeDeFotos.length;
    }

    for(var i = 0; i < qtdeDeFotos.length; i++)
    {
        qtdeDeFotos[i].style.display = "none";
    }

    qtdeDeFotos[primeiraFoto - 1].style.display = "block";
}


showImgs2(primeiraFoto);

function mudarFoto2(numeroFoto2)
{
    showImgs2(primeiraFoto += numeroFoto2);
}

function showImgs2(numero2)
{
    var qtdeDeFotos2 = document.getElementsByClassName("slider2");

    if (numero2 > qtdeDeFotos2.length)
    {
        primeiraFoto = 1;
    }

    if (numero2 < 1)
    {
        primeiraFoto = qtdeDeFotos2.length;
    }

    for(var i2 = 0; i2 < qtdeDeFotos2.length; i2++)
    {
        qtdeDeFotos2[i2].style.display = "none";
    }

    qtdeDeFotos2[primeiraFoto - 1].style.display = "block";
}

showImgs3(primeiraFoto);

function mudarFoto3(numeroFoto3)
{
    showImgs3(primeiraFoto += numeroFoto3);
}

function showImgs3(numero3)
{
    var qtdeDeFotos3 = document.getElementsByClassName("slider3");

    if (numero3 > qtdeDeFotos3.length)
    {
        primeiraFoto = 1;
    }

    if (numero3 < 1)
    {
        primeiraFoto = qtdeDeFotos3.length;
    }

    for(var i3 = 0; i3 < qtdeDeFotos3.length; i3++)
    {
        qtdeDeFotos3[i3].style.display = "none";
    }

    qtdeDeFotos3[primeiraFoto - 1].style.display = "block";
}

showImgs4(primeiraFoto);

function mudarFoto4(numeroFoto4)
{
    showImgs4(primeiraFoto += numeroFoto4);
}

function showImgs4(numero4)
{
    var qtdeDeFotos4 = document.getElementsByClassName("slider4");

    if (numero4 > qtdeDeFotos4.length)
    {
        primeiraFoto = 1;
    }

    if (numero4 < 1)
    {
        primeiraFoto = qtdeDeFotos4.length;
    }

    for(var i4 = 0; i4 < qtdeDeFotos4.length; i4++)
    {
        qtdeDeFotos4[i4].style.display = "none";
    }

    qtdeDeFotos4[primeiraFoto - 1].style.display = "block";
}

showImgs5(primeiraFoto);

function mudarFoto5(numeroFoto5)
{
    showImgs5(primeiraFoto += numeroFoto5);
}

function showImgs5(numero5)
{
    var qtdeDeFotos5 = document.getElementsByClassName("slider5");

    if (numero5 > qtdeDeFotos5.length)
    {
        primeiraFoto = 1;
    }

    if (numero5 < 1)
    {
        primeiraFoto = qtdeDeFotos5.length;
    }

    for(var i5 = 0; i5 < qtdeDeFotos5.length; i5++)
    {
        qtdeDeFotos5[i5].style.display = "none";
    }

    qtdeDeFotos5[primeiraFoto - 1].style.display = "block";
}


showImgs6(primeiraFoto);

function mudarFoto6(numeroFoto6)
{
    showImgs6(primeiraFoto += numeroFoto6);
}

function showImgs6(numero6)
{
    var qtdeDeFotos6 = document.getElementsByClassName("slider6");

    if (numero6 > qtdeDeFotos6.length)
    {
        primeiraFoto = 1;
    }

    if (numero6 < 1)
    {
        primeiraFoto = qtdeDeFotos6.length;
    }

    for(var i6 = 0; i6 < qtdeDeFotos6.length; i6++)
    {
        qtdeDeFotos6[i6].style.display = "none";
    }

    qtdeDeFotos6[primeiraFoto - 1].style.display = "block";
}

showImgs7(primeiraFoto);

function mudarFoto7(numeroFoto7)
{
    showImgs7(primeiraFoto += numeroFoto7);
}

function showImgs7(numero7)
{
    var qtdeDeFotos7 = document.getElementsByClassName("slider7");

    if (numero7 > qtdeDeFotos7.length)
    {
        primeiraFoto = 1;
    }

    if (numero7 < 1)
    {
        primeiraFoto = qtdeDeFotos7.length;
    }

    for(var i7 = 0; i7 < qtdeDeFotos7.length; i7++)
    {
        qtdeDeFotos7[i7].style.display = "none";
    }

    qtdeDeFotos7[primeiraFoto - 1].style.display = "block";
}

showImgs8(primeiraFoto);

function mudarFoto8(numeroFoto8)
{
    showImgs8(primeiraFoto += numeroFoto8);
}

function showImgs8(numero8)
{
    var qtdeDeFotos8 = document.getElementsByClassName("slider8");

    if (numero8 > qtdeDeFotos8.length)
    {
        primeiraFoto = 1;
    }

    if (numero8 < 1)
    {
        primeiraFoto = qtdeDeFotos8.length;
    }

    for(var i8 = 0; i8 < qtdeDeFotos8.length; i8++)
    {
        qtdeDeFotos8[i8].style.display = "none";
    }

    qtdeDeFotos8[primeiraFoto - 1].style.display = "block";
}