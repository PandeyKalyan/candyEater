
class candyEater {
    constructor(candyArray) {
        this.candyArray = candyArray;
        this.candyArray.forEach((colorsCount, person) => {
            colorsCount.forEach((count, color)=> {
                console.log(`${person}, ${color} = ${count}`);
            });
        });
    }

    whoAteMostCandy() {
        
        var voraciousEater = '';
        var maxNoOfCandies = 0;
        this.candyArray.forEach((colorsCount, person) => {
            var countTotalCandies = 0;
            colorsCount.forEach((count, color)=> {
                //console.log(person + ', ' + color + '= ' + count);
                countTotalCandies = countTotalCandies + count;
            });
            if(countTotalCandies > maxNoOfCandies) {
                maxNoOfCandies = countTotalCandies;
                voraciousEater = person;
            }
        });
        console.log('The one who ate most candy is: ' + voraciousEater );
    }

    whichColorMostEaten() {
        var allColors = new Map();
        var mostPreferredColor = '';
        var mostPreferredColorCount = 0;
        this.candyArray.forEach(colorsCount=> {
            colorsCount.forEach((count, color) => {
                if(!allColors.has(color)) {
                    allColors.set(color, count);
                }
                else {
                    allColors.set(color, allColors.get(color) + count);
                }
            });
        });

        allColors.forEach((count, color)=> {
            if(count > mostPreferredColorCount) {
                mostPreferredColor = color;
                mostPreferredColorCount = count;
            }
        });
        console.log("The most preferred color is: " + mostPreferredColor);
    }
}

const candyDatas = new Map([['Bijay', new Map([['green', 13], ['yellow', 8], ['blue', 9], ['black', 7]])],
                    ['Ramesh', new Map([['green', 15], ['purple', 11], ['yellow', 9], ['pink', 13], ['blue', 6]])], 
                    ['Sita', new Map([['blue', 16], ['black', 9], ['green', 13]])], 
                    ['Ram', new Map([['blue', 6], ['pink', 7], ['yellow', 9], ['purple', 9], ['green', 7]])]]);

var candyEat = new candyEater(candyDatas);
candyEat.whoAteMostCandy();
candyEat.whichColorMostEaten();