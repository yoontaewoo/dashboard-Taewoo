function Random(){
A = Math.random()*10;
A = Math.round(A);
return A;
}

function Dice()
{  
    while(true)
    {
        num = Random()
        if(1<=num && num<7){
            break;
        }
    }      
    return num
}

function DiceOutput(num){
    console.log("주사위수는 "+num+" 입니다.");
}




function Fight(num1, num2){
    if(num1 == num2){
        console.log(num1+"로 비겼습니다.");
    }
    else if(num1 > num2){
        let A = num1 - num2
        console.log("플레이어1님이 "+A+"차이로 이기셨습니다.");
    }
    else if(num1 < num2){
        let B = num2 - num1
        console.log("플레이어2님이 "+B+"차이로 이기셨습니다.");
    }
}


player1 = Dice()
player2 = Dice()


Fight(player1, player2)









