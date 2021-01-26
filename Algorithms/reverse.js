// Take a list and reverse it
    // L1 => 2,5,8,11,14
    // result => 14, 11, 8, 5, 2

    const reverse = (L1) => {
        let start = 0;
        let end = L1.length - 1;

        while (start < end){
            let temp = L1[start]; // saving the start value 
            L1[start] = L1[end]; // making the 'start' indexed value = the 'end' indexed value 
            L1[end] = temp; // making the 'end' indexed value = the 'temp' ('start' indexed) value 
            start++; // incrementing and decrementing to move to the inner elements to prep for next loop 
            end--;
        }
        
        return L1
    }
    console.log("Reverse List:", reverse([2,5,8,11,14]));

// Take a string and reverse it
    // str =>"aidan"
    // result => "nadia"

    const reverseString = (str) => {
        let end = str.length - 1;
        let answer = []

        while (end > -1){
            answer.push(str[end]);
            end--;
        }
        
        return answer.join("")
    }
    
    console.log("Reverse String:", reverseString('aidan'));   



// Use-case in a algo questions...

// 1) Take a list and rotate it to the right k times 
    // list => [2,5,8,11,14]
    // k => 7
    // result => [11,14,2,5,8]

    const rotate = (list, k) => {
        k = k % list.length; 
        // This code ensures that if k is greater that the length of the list, we only rotate to the right the amount of time nessesary
        // e.g.) If k = 7 and the length = 5 the rotation looks like [1,2,3,4,5,6,7] > [6,7,1,2,3,4,5]
        //      Practically, it is as if the rotation was only 1 to the right OR k = 2
        //      So changing k to the remainder after fitting as much of k possible into list.length, we only do the 
        //      nessesary amount of rotations to give us the same effect
        // We use modulo to find the remainder of k divided by the length of the list

        if (k === 0) return list;

        reverseHelper(list, 0, list.length - 1); // 14,11,8,5,2
        reverseHelper(list, 0, k - 1); // 11,14,8,5,2
        reverseHelper(list, k, list.length - 1); // 11,14,2,5,8

        return list
    }

    const reverseHelper = (list, start, end) => { // similar to reverse fuction at the top but adding the ability to choose start and end points to reverse within
        while (start < end){
            let temp = list[start]; // saving the start value 
            list[start] = list[end]; // making the 'start' indexed value = the 'end' indexed value 
            list[end] = temp; // making the 'end' indexed value = the 'temp' ('start' indexed) value 
            start++; // incrementing and decrementing to move to the inner elements to prep for next loop 
            end--;
        }
        
        return list
    }

    console.log("Rotate:", rotate([2,5,8,11,14], 7));

    
    