// Shortest Word Distance
// Problem Statement

// Given an array of strings words and two different strings that already exist in the array word1 and word2, return the shortest distance between these two words in the list.


const calculateNewDistance = (index: number, secondIndex: number): number => {
    return Math.abs(index - secondIndex); 
}

const shortWordDistance = (words: string[], word1: string, word2: string): number => {

    let closestDistance = words.length + 1; 
    let word1ClosestIndex = words.length; 
    let word2ClosestIndex = words.length; 

    for(let i = 0; i < words.length; i++) {
        if(words[i] === word1) {
            
            const newDistance = calculateNewDistance(i, word2ClosestIndex);

            if(newDistance < closestDistance) {
                word1ClosestIndex = i; 
                closestDistance = newDistance
                
            }
            continue; 
        }

        if(words[i] === word2) {
            const newDistance = calculateNewDistance(i, word1ClosestIndex);
            if(newDistance < closestDistance) {
                word2ClosestIndex = i; 
                closestDistance = newDistance
                
            }
        }
    }


    return closestDistance; 
   
}