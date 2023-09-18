$( document ).ready(function() { 
 
  //button is clicked when user name is entered
  $('#btnUserName').click(function() { 
    console.log("button clicked")

    //declare variables
    let englishName = $('#userName').val();
    let outputPigLatin;
    let outputSpiritPig;
    
    //call function that outputs name in pig latin
    outputPigLatin = 'Your name in pig latin is: ' + pigLatin(englishName);
    
    //output name in pig latin to page
    $('#namePigLatin').text(outputPigLatin);
    
    //call function that outputs spirit pig
    outputSpiritPig = 'Your spirit pig is: ' + spiritPig(englishName);
    
    //output spirit pig to page
    $('#nameSpiritPig').text(outputSpiritPig);

  }); 
});

//function that takes user name and converts in to pig latin
function pigLatin(englishName) {
  let original = englishName.toLowerCase();
  let convertedName = "";
  for (let i = 1; i < original.length; i++) {
  convertedName += original[i];
}
  convertedName = convertedName + original[0] + 'ay';
  return convertedName;
}

//function that chooses spirit pig based on the name length
function spiritPig(englishName) {
  let nameLength = englishName.length;
  let spiritPigDescription;
  if (nameLength < 4) {
$('#spiritPigPhoto').attr('src', 'https://npr.brightspotcdn.com/dims4/default/562cdf1/2147483647/strip/true/crop/889x500+29+0/resize/1200x675!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F62%2Fd7%2F7ba94038479881d6e20c5e4f4947%2Fmagnificent-best-sleeping-pig.jpg');
    spiritPigDescription = 'sleeping pig';
  } else if (nameLength < 6) { $('#spiritPigPhoto').attr('src','https://do.lolwot.com/wp-content/uploads/2015/08/20-of-the-most-fashionable-pigs-youve-ever-seen.jpg');
 spiritPigDescription = 'western pig';
  } else if (nameLength < 8){
$('#spiritPigPhoto').attr('src','https://us.123rf.com/450wm/venakr/venakr2306/venakr230605078/207589301-happy-cute-pig-on-a-summer-day.jpg');
 spiritPigDescription = 'sunny pig';
  } else {
$('#spiritPigPhoto').attr('src', 'https://s.abcnews.com/images/Lifestyle/AP_micro_pigs_2_sr_140319_1x1_1600.jpg?w=240');
 spiritPigDescription = 'royal pig';
  }
  return spiritPigDescription;
}
