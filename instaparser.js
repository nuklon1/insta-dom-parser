/*
	Instagram DOM parser
		- followers
		- following

	followers:
		a (FPmhX notranslate _0imsa)

	-

	*just put this code to the browser console & press Enter
*/

// CSS classes	PZuss
const mainDiv = document.getElementsByClassName('isgrP');
const ul = document.getElementsByClassName('jSC57  _6xe7A');

// get list
const ulDiv = ul[0].firstChild;

// followers & followings (the 1st element [0] is a followers, the 2nd [1] - followings)
const limit = [
	// followers
	parseInt(document.getElementsByClassName('g47SY')[1].innerHTML.replace(/\s+/g, '')), 
	// following
	parseInt(document.getElementsByClassName('g47SY')[2].innerHTML.replace(/\s+/g, ''))
];

console.log('%cData capture...', 'font-size:24px;color:red',);

// run the script with a slight delay
const run = setInterval(function() {
	let listNodes = ulDiv.childNodes.length;
	console.log(listNodes);
	// if we havent reached the end of the list..
	if (listNodes < limit[1] - 1) {
		// scroll down
		mainDiv[0].scrollTop = ulDiv.scrollHeight;
	} else {
		getUserNames(listNodes, run);
	}
}, 100);


function getUserNames(listNodes, runInterval) {
	// stop the script
	clearInterval(runInterval);

	let a = document.getElementsByClassName('FPmhX notranslate _0imsa');
	let result = '';
	[].forEach.call(a, function(elem) {
	  	result += elem.innerHTML + "\n";
	});		
	console.log(
`%cAccounts list (${listNodes}):
%c${result}
%cNow copy the collected accounts and use at your discretion`,
//
'font-size:36px;color:green',
'',
'font-size:12px;color:gray;font-family:Courier New'
	);
}

