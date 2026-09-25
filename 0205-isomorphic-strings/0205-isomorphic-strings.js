var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    const sToT = new Map();
    const tToS = new Map();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        // s -> t mapping already exists
        if (sToT.has(charS) && sToT.get(charS) !== charT) {
            return false;
        }

        // t -> s mapping already exists
        if (tToS.has(charT) && tToS.get(charT) !== charS) {
            return false;
        }

        sToT.set(charS, charT);
        tToS.set(charT, charS);
    }

    return true;
};