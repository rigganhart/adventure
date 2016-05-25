var hero = prompt("Boognish is Rising, To Achieve Balance Choose Your Hero! Choose Wisely....")

//Deaner
if (hero.toLowerCase() === "deaner") {
  var inspiration = prompt("Deaner was out pushing the lil daisies, give him something to eat to inspire him")
  if (inspiration.toLowerCase() === "waste") {
    var stallion = confirm("Deaner can really 'taste the waste' he needs a way to balance out. Should he ride the Stallion?")
      if (stallion) {
        var whereToGo = prompt("Dude, I am The Stallion, man. Balance is in many places. Do you want to go to 1). Buckingham Green, 2). Chocolate Town, 3). Valejo")
        switch (whereToGo.toLowerCase()) {
          case '1' || 'buckingham green':
            console.log("On Buckingham Green the child without an eye made her mother cry, 'Why ask why?' This was such a profound experience you found Balance. Congratulations, Balance is for men, who learn to know!");
            break;
          case '2' || 'chocolate town' :
            console.log("While paintin Chocolate Town brown Boognish appeared and told you the secret: 'Balance is for men, who learn to know' over and over agin. You win! Boognish considered crashing your browser with an infinite loop just to be mischievous")
            break;
          case '3' || "valejo" :
            console.log("VALeeeeeeeeeeeejjjjjjjjjjjjjjjooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo isnt really a place but a state of Balance. You Win!")
            break;
          default:
            console.log("Buenos Tardes Amigo. Pick a place to search for Balance! Game Over. Refresh and try again!");
        }
      } else {
        console.log("Yo dude, he is The Stallion! You need to ride to find Balance! Game Over. Try again!");
      }
  } else if (inspiration.toLowerCase() === "porkroll egg and cheese") {
    var stallion = confirm("Deaner ate a porkroll egg and cheese, but his work is not done. Should he ride The Stallion?")
    if (stallion) {
      var whereToGo = prompt("Dude, I am The Stallion, man. Balance is in many places. Do you want to go to 1). Buckingham Green, 2). Chocolate Town 3). Valejo")
      switch (whereToGo.toLowerCase()) {
        case '1' || 'buckingham green':
          console.log("On Buckingham Green the child without an eye made her mother cry, 'Why ask why?' This was such a profound experience you found Balance. Congratulations, Balance is for men, who learn to know!");
          break;
        case '2' || 'chocolate town' :
          console.log("While paintin Chocolate Town brown Boognish appeared and told you the secret: 'Balance is for men, who learn to know' over and over agin. You win! Boognish considered crashing your browser just for mischief sake")
          break;
        case '3' || "valejo" :
          console.log("VALeeeeeeeeeeeejjjjjjjjjjjjjjjooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo isnt really a place but a state of Balance. You Win!")
          break;
        default:
          console.log("Buenos Tardes Amigo. Pick a place to search for Balance! Game Over. Refresh and try again!");
      }
    } else {
      console.log("Yo dude, he is The Stallion! You need to ride to find Balance! Game Over. Try again!");
    }
  } else {
  console.log("Deaner needs to taste the 'waste' or enjoy a 'porkroll egg and cheese' to find Balance. Game Over. refresh and try again");
  }

//Gener
} else if (hero.toLowerCase() === "gener") {
    var wake = prompt("I saw Gener cryin in his sleep, give him something to wake him up and leave The Pod")
    if (wake.toLowerCase() === "happy colored marbles"){
      var mollusk = confirm("Happy colored marbles are rolling in Deaner's head, He leaves The Pod, and while walking across the sandy ground he finds a Mollusk. Does the Mollusk emulate the Ocean's sound?")
      if (mollusk) {
        var whoToFollow = prompt("The Mollusk tells Deaner he needs to train under someone to achieve Balance. Who should he follow? 1). Ocean Man 2). Voodoo Lady 3). Dr Rock")
        switch (whoToFollow.toLowerCase()) {
          case "1" || "ocean man":
            console.log("Ocean Man takes Gener by the hand and leads him to the land to understand that Balance is for men who learn to know. Congratulations, you have found Balance")
            break;
          case "2" || "voodoo lady" :
            console.log("Voodoo Lady is driving Deaner crazy with her boogeywoogywooogywoogy. So, Deaner learns to boogeywoogey himself and Finds Balance. You Win!")
            break;
          case "3" || "dr rock" :
          console.log("Dr Rock instructs Deaner to scream ahhhhhhhhhhhhhhhhh at the top of his lungs over and over again until he passes out thus achieveing Balance. Congrats! You Win!")
            break;
          default:
          console.log("Only these three sages can lead you to Balance. Refresh and try again!");

        }
      } else {
        console.log("The Mollusk lingers with its wandering eye, but does not emulate the ocean's sound. Game Over. Try again to find the right Mollusk");
      }
    } else if (wake.toLowerCase() === "scotchguard") {
      var mollusk = confirm("The scotchguard sends Deaner to a psychadelic state and he leaves The Pod, and while walking across the sandy ground he finds a Mollusk. Does the Mollusk emulate the Ocean's sound?")
      if (mollusk) {
        var whoToFollow = prompt("The Mollusk tells Deaner he needs to train under someone to achieve Balance. Who should he follow? 1). Ocean Man 2). Voodoo Lady 3). Dr Rock")
        switch (whoToFollow.toLowerCase()) {
          case "1" || "ocean man":
            console.log("Ocean Man takes Gener by the hand and leads him to the land to understand that Balance is for men who learn to know. Congratulations, you have found Balance")
            break;
          case "2" || "voodoo lady" :
            console.log("Voodoo Lady is driving Deaner crazy with her boogeywoogywooogywoogy. So, Deaner learns to boogeywoogey himself and Finds Balance. You Win!")
            break;
          case "3" || "dr rock" :
          console.log("Dr Rock instructs Deaner to scream ahhhhhhhhhhhhhhhhh at the top of his lungs over and over again until he passes out thus achieveing Balance. Congrats! You Win!")
            break;
          default:
          console.log("Only these three sages can lead you to Balance. Refresh and try again!");

        }
      } else {
        console.log("The Mollusk lingers with its wandering eye, but does not emulate the ocean's sound. Game Over. Try again to find the right Mollusk");
      }
    } else {
      console.log("Gener needs some 'happy colored marbles' or some 'scotchguard' to wake up and leave The Pod. Game Over. Refresh and try again!");
    }

//loser
} else {
  console.log("'You Chose Poorly' Only 'Deaner' or 'Gener' can find Balance. Game Over. refresh and try again!");
}
