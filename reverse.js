let arr=[1,3,6,5,2]

function reverse(arr,i=0,rev=[])
{
    if(i==arr.length)
        return rev;
    else
    {
        rev=reverse(arr,i+1,rev);
        rev[rev.length]=arr[i];
        return rev;
    }
}
console.log(reverse(arr));