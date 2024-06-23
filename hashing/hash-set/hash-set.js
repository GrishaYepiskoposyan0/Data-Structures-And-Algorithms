class HashSet {

    constructor() {
        this.#buckets = new Array(5).fill(null).map(() => []);
        this.size = 0;
    }
    #buckets = null;
    contains(val) {
        val = this.#objectToString(val)
        const index = this.hashCode(val) % this.#buckets.length;
        const bucket = this.#buckets[index];
        for(let i = 0; i < bucket.length; i++){
            if(bucket[i] === val){
                return true
            }
        }
        return false;
    }

    hashCode(val){
        val = this.#objectToString(val)
        let hash = 0;
        for (const key of val) {
            hash += key.charCodeAt(0);
        }
        return hash;
    }

    add(val) {
        val = this.#objectToString(val)
        if(!this.contains(val)){
            if(this.size === this.#buckets.length){
                const newBuckets = new Array(this.#buckets.length * 2).fill(null).map(() => []);
                this.#buckets.forEach((bucket) => {
                    bucket.forEach((item) => {
                        const index = this.hashCode(item) % newBuckets.length;
                        newBuckets[index].push(item);
                    })
                })
                this.#buckets = newBuckets;
            }
            const index = this.hashCode(val) % this.#buckets.length;
            this.#buckets[index].push(val);
            this.size++;
        }
    }

    remove(val){
        val = this.#objectToString(val)
        if(this.contains(val)){
            const index = this.hashCode(val) % this.#buckets.length;
            const bucket = this.#buckets[index];
            for(let i = 0; i < bucket.length; i++){
                if(bucket[i] === val){
                    bucket[i] = bucket[bucket.length - 1];
                    bucket.pop()
                    break;
                }
            }
        }
    }

    getValues(){
        return this.#buckets.flat();
    }

    #objectToString(val){
        if(val instanceof Object){
            val = JSON.stringify(val);
        } else {
            val = val.toString();
        }
        return val;
    }
}

const set = new HashSet();
set.add(4)
set.add(5)
set.add(1)
set.add(23)
set.add(24)
set.add(27)
set.remove(5)
console.log(set.contains(10))
console.log(set.contains(4))
console.log(set.getValues())