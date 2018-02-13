//ES6 JS Classes
class User {
    constructor(name){
      this.name = name;
      this.type = "Trial User"
    }
    //Method 1
    greet(){
      console.log('Welcome back,' + this.name);
    }
    //Method 2
    status(){
      console.log('Current status: ' + this.type);
    }
  }
  //Extends
class TrialUser extends User {
    trialEnding(){
      console.log('Your trial will be ending soon, ' + this.name + '.' + ' Would you like to join our program?');
    }
  }
//Instance of User class
var anonDude = new User("Anonymous");
anonDude.greet();
anonDude.status();

//Instance of TrialUser class
var trialUser = new TrialUser("Paul");
trialUser.greet();
trialUser.trialEnding();
trialUser.status();

class BannedUser extends User{
    banned(){
        console.log(this.name + ', you have been banned for not paying your fee')
    }
}

let bannedUser = new BannedUser("Joe")
bannedUser.banned()