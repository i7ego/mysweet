var i=0,text;
//let name = prompt("Enter your lover name : ")
text = `
My sweet Ola,

`

function typing(){
	if(i<text.length){
		document.getElementById("head").innerHTML += text.charAt(i);
		i++;
		setTimeout(typing,100);
		}
	}
typing();

var l=0,text1;
//let nam1 = prompt("Enter your name:")
text1 = `
You are the most amazing person I have ever met. You fill my life with happiness, laughter, and peace. You are my best friend, my soulmate, and my lover. You are the only one who can make me feel this way. I love you more than words can express.

Always yours, 
 Ahmed Hagag`
function typing1(){
	if(l<text1.length){
		document.getElementById("head1").innerHTML += text1.charAt(l);
		l++;
		setTimeout(typing1,50);
		}
	}
setTimeout(typing1,2000);
