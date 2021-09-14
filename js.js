var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
var width=300;
var height=300;
var mas=[];
var count=0;
var timer;
var n=30, m=30;
var pause=true;
var mouseLeftPress=false;
var x = 0;
var y = 0;
var flagChanceSquare=false;
var flagframe=false;
window.addEventListener('mousedown', function () {
     if (event.which==1) mouseLeftPress=true;
 });
 window.addEventListener('mouseup', function () {
     if (event.which==1) mouseLeftPress=false;
 });
window.addEventListener('mousemove', function (){
     var newX = Math.floor(event.offsetX/10);
     var newY = Math.floor(event.offsetY/10);
     if ((x!=newX||y!=newY)&&flagFrame==true)
     {
         x=newX;
         y=newY;
         flagChanceSquare=true;
     }
  //   console.log(newX+'  '+newY);
});
window.addEventListener('mouseover', function (){
    if (event.target.tagName=="CANVAS")
    {
       flagFrame=true;
    }
    else
    {
        flagFrame=false;
    }
   //.log(event.target.tagName+" "+flagFrame );
});
function changeSquare(event){
    if (mouseLeftPress==true && flagChanceSquare==true&&flagFrame==true)
    {
	
	///console.log(x);
	//console.log(y);
	//x = Math.floor(x/10); //300 /10 = 30
	//y = Math.floor(y/10); //300 /10 = 
	mas[y][x]==1?mas[y][x]=0:mas[y][x]=1;
      //  console.log("big");
	//console.log(mas);
	drawField();
        flagChanceSquare=false;
    }
}//);

function goLife(){
	
	for (var i=0; i<n; i++){
		mas[i]=[];
		for (var j=0; j<m; j++){
			mas[i][j]=0;
		}
	}
}
goLife();

function drawField(){
	ctx.clearRect(0, 0, width, height);
	for (var i=0; i<n; i++){
		for (var j=0; j<m; j++){
			if (mas[i][j]==1){
                               ctx.fillStyle = "#00CC00"
				ctx.fillRect(j*10, i*10, 10, 10);
			}
		}
	}
}
function cloneArr(arr)
{
    res=[];
    for (var i=0;i<arr.length;i++)
    {
        res[i]=[];
        for (var j=0;j<arr.length;j++)
        {
            res[i][j]=arr[i][j];
        }
    }
    return res;
}
function startLife(){
	//моделирование жизни
	//var mas2 = [];
        if (pause==false)
        {
            var mas2 = cloneArr(mas);
            for (var i=0; i<n; i++)
            {
                for (var j=0; j<m; j++)
                {
                    let neighbors = 0;
                    if (mas[fpm(i)-1][j]==1) neighbors++;//up
                    if (mas[i][fpp(j)+1]==1) neighbors++;//right
                    if (mas[fpp(i)+1][j]==1) neighbors++;//bottom
                    if (mas[i][fpm(j)-1]==1) neighbors++;//left
                    if (mas[fpm(i)-1][fpp(j)+1]==1) neighbors++;
                    if (mas[fpp(i)+1][fpp(j)+1]==1) neighbors++;
                    if (mas[fpp(i)+1][fpm(j)-1]==1) neighbors++;
                    if (mas[fpm(i)-1][fpm(j)-1]==1) neighbors++; 
                    if (mas[i][j]==0)
                    {
                        if ( neighbors==3) 
                        {   
                            mas2[i][j]=1;
                        }
                    }
                    else
                    {
                        if ((neighbors<2 || neighbors>3) )
                        {
                            mas2[i][j]=0;

                        } 
                    }  

                }
            }

            //neighbors=0;
            mas = cloneArr(mas2);;
            drawField();
            count++;
            updateScreen();
            timer = setTimeout(startLife, 80);
        }
        
       
}

function fpm(i){
	if(i==0) return 30;
	else return i;
}
function fpp(i){
	if(i==29) return -1;
	else return i;
}
function updateScreen()
{
    drawField();
    document.getElementById('count').innerHTML = count; 
}

// window.addEventListener('keydown', function () {
//            if (event.code=='Space') startLife();
//        });
document.getElementById('start').onclick=function(){ 
        if (pause==true)
        {
            pause=false;
            startLife();
        }

}
//startLife();
setInterval(changeSquare,25);
document.getElementById('stop').onclick=function(){
        pause=true;
}
document.getElementById('clear').onclick=function(){
        pause=true;
        count=0;
        goLife();
        updateScreen();
        

}
    