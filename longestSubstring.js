function longestSubstring(str) {
    let maxlen = 0;
    let l = 0;
    let set = new Set();
    let longestSubstr = "";

    for (let r = 0; r < str.length; r++) {
        // If character is already in the set, remove from the left
        while (set.has(str[r])) {
            set.delete(str[l]);
            l++;
        }

        // Add current character to the set
        set.add(str[r]);

        // Update the maximum length and substring if necessary
        if (r - l + 1 > maxlen) {
            maxlen = r - l + 1;
            longestSubstr = str.substring(l, r + 1);
        }
    }

    return { maxlen, longestSubstr };
}

console.log(longestSubstring("abcdefghijklmnophhyz")); 
