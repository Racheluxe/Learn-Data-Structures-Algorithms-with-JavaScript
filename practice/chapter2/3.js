/**
 * Created by goody on 8-9-009.
 */
function weekTemp(data) {
    this.dataStore =data;
    this.add =add;
    this.monthaverage = monthaverage
    this.weekaverage =weekaverage;
}
function add(week,temp) {
    this.dataStore[week-1].push(temp);
}
function monthaverage() {
    var total = 0;
    var day = 0;
    for(wn = 0;wn<this.dataStore.length;wn++){
        for(dn= 0;dn<this.dataStore[wn].length;dn++){
            day++;
            total+=this.dataStore[wn][dn];
        }
    }
    return total/day;
}
function weekaverage() {
    var total = 0;
    var avg = [];
    for (var row = 0; row < this.dataStore.length; ++row) {
        total = 0;
        for(var col = 0; col < this.dataStore[row].length; ++col) {
            total += this.dataStore[row][col];
        }
        avg[row] = total/this.dataStore[row].length;
    }
    return avg;
}
var data = [];
for(var i=0; i<5; i++) {
    data[i] = [];
}