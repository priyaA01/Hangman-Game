var lettersAlreadyGuessed=[];
	var wins=0;
	var losses=0;
	var guessesRemaining=0;
	var lettersGuessed=[];


function wordList(){
	document.getElementById("errorMsg").style.display="none";
	document.getElementById("word").innerHTML="";
	document.getElementById("wordHidden").innerHTML="";
	document.getElementById("letter").innerHTML="";
	guessesRemaining=10;
	var words=["Australia","Brazil","Canada","Denmark","Egypt","France","India","Japan","China","Mexico"];
	var wordToFind=words[Math.floor(Math.random()*words.length)];

	var displayHyphen="";

	for(var i=0;i<wordToFind.length;i++)
	{		

		displayHyphen= displayHyphen +'-';
	}
	
	document.getElementById("word").innerHTML=displayHyphen;
	document.getElementById("wordHidden").innerHTML= wordToFind;
	console.log("Word to find   " + wordToFind);


document.onkeyup = function(event){
	var letterIndex="";
    var x = event.keyCode || event.which;    
    var y = String.fromCharCode(x); 
    if(x>=65 && x<=90 || x >=97 && x<=122)
    {          
    	document.getElementById("errorMsg").style.display="none";
	    document.getElementById("letter").innerHTML =  y.toLowerCase();
	    matchingLetters(y.toLowerCase()); 
    } 
 	else
 	{
    	document.getElementById("errorMsg").innerHTML ="Please enter letters from a-z";
    	document.getElementById("errorMsg").style.display="block";
    } 
}
	
	//return wordToFind;	
}


function matchingLetters(letterEntered)
{
	var wordToFind=(document.getElementById("wordHidden").innerHTML).toLowerCase();
	var displayHyphen=document.getElementById("word").innerHTML;
	
	console.log(wordToFind + "and" +  displayHyphen.length );

		if(wordToFind.indexOf(letterEntered)>-1)
		{
			for(var i=0;i < wordToFind.length;i++)
			{
				if(wordToFind.charAt(i)==letterEntered)
				{
					displayHyphen=setCharAt(displayHyphen,i,letterEntered);		
				}
			}
		}
		else 
		{
			if(lettersGuessed.indexOf(letterEntered)===-1)
			{
			lettersGuessed.push(letterEntered);
			}
			document.getElementById("lettersGuessed").innerHTML = lettersGuessed;

			guessesRemaining--;
			document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
			console.log("letter is not in the word"  + guessesRemaining );
		}
		
		document.getElementById("word").innerHTML=displayHyphen;

		if(displayHyphen===wordToFind)
		{
			wins++;
			document.getElementById("wins").innerHTML = wins;
			console.log("score increased " +wins);
			wordList();
		}
		else if( displayHyphen!=wordToFind && guessesRemaining===0)
		{
			losses++;
			document.getElementById("losses").innerHTML = losses;
			console.log("You Lost ! Try again " +losses);
			wordList();
		}
		//wins++;
		//wordList();
}


function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

/*

/*var x = document.createElement("INPUT");
		x.setAttribute("type", "text"); 
		x.setAttribute("id",i);
		x.setAttribute("size","1");  
		document.getElementById("word").appendChild(x);                    
		//document.body.appendChild(x);
		//displayHyphen=displayHyphen.concat(x);
			//"<input type='text' id="+i+" name='fname' size='1'>" );

letterReplace(i,letterEntered);
			    	/*console.log("letter is in the word  "  + letterEntered );
			    	displayHyphen=displayHyphen.charAt(i).replace(letterEntered);*/
			    	//console.log(displayHyphen);
			    	/*document.getElementById("1").innerHTML=letterEntered;
			    	console.log(document.getElementById("1").innerHTML);*/
			    	//displayHyphen[i].replace(displayHyphen[i],letterEntered);
			    	//displayHyphen.charAt(i).replace(letterEntered);	*/