let arr=[1,2,3,5];

function retLast(arr,i=0)
{
    if(arr[i+1]==undefined)
        return arr[i];
    else
        return retLast(arr,i+1);
}

console.log(retLast(arr));