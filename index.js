

myDay = {
    arrDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    arrActivities: [],
    arrActivities2:['😴', '👕', '💪', '💩', '🤘']
}



    myDay.dayOfTheWeek = function() {
        let today = new Date();
        let day = today.getDay();//Gets the day of the week, using local time.
        return this.arrDays[day];
    }
    console.log(myDay.dayOfTheWeek());
    console.log();

   

    myDay.addActivities = function(arr) {
        console.log(`Today is ${this.dayOfTheWeek()} and these are my activities ${arr}`);
    }
    myDay.addActivities(['😴', '👕']);

console.log();
   
    myDay.addActivities2 = function(arr) {
        console.log(`Today is ${this.dayOfTheWeek()} and these are my activities ${myDay.arrActivities2}`);
    }

    myDay.addActivities2([]);
   
