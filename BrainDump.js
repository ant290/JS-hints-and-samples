/**
 * iterates through the properties of an object,
 * returns the object if any properties contain the filter string
 * @param obj 
 * @param match 
 */
hasMatch(obj: any, match: string): void {
    for (let key of Object.values(obj)) {
        if(key.toString().indexOf(match) !== -1){
            //match found
            return obj;
        }
        //no match
    }
}