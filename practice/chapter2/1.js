/**
 * Created by goody on 8-5-005.
 */
function addExamScore(temp) {
    this.score.push(temp)
}
function showExamScore() {
    console.log(this.score);
}
function showAverage() {
    var sum = 0;
    var avg;
    for(i = 0 ; i<this.score.length;i++){
        sum +=this.score[i];
    }
    avg = sum/this.score.length;
    console.log(avg);
}
function student (){
    this.score =[];
    this.add = addExamScore;
    this.show = showExamScore;
    this.showAverage = showAverage;
}
var xiaoming = new student();
xiaoming.add(123);
xiaoming.add(22);
xiaoming.add(43);
xiaoming.show();
xiaoming.showAverage();