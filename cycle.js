function cycle(arr)
{
    return {
        i:0,
        next: function()
        {
            return arr[(this.i++)%arr.length];
        }
    }
}

let x=cycle([1,2,3,4]);

console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());